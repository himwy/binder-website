/**
 * One-off: key Bindy mascot art off its cream paper background.
 * Flood-fills background from the image border (the black character
 * outline stops the fill), feathers anti-aliased edges, trims, resizes.
 *
 * Usage: node scripts/process-bindy.cjs <src.png> <out.png> [tolerance] [maxEdge]
 */
const sharp = require("sharp");

const [, , src, out, tolArg, maxEdgeArg] = process.argv;
if (!src || !out) {
  console.error("usage: node scripts/process-bindy.cjs <src> <out> [tolerance] [maxEdge]");
  process.exit(1);
}
const TOL = Number(tolArg ?? 60);
const MAX_EDGE = Number(maxEdgeArg ?? 1100);

const dist = (r1, g1, b1, r2, g2, b2) =>
  Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);

(async () => {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;

  // Background colour = median of border pixels.
  const rs = [];
  const gs = [];
  const bs = [];
  const pushPx = (x, y) => {
    const i = (y * w + x) * 4;
    rs.push(data[i]);
    gs.push(data[i + 1]);
    bs.push(data[i + 2]);
  };
  for (let x = 0; x < w; x++) {
    pushPx(x, 0);
    pushPx(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    pushPx(0, y);
    pushPx(w - 1, y);
  }
  const median = (arr) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
  const bg = [median(rs), median(gs), median(bs)];
  console.log(`bg colour: rgb(${bg.join(",")})  size: ${w}x${h}  tol: ${TOL}`);

  // BFS flood fill from every border pixel.
  const isBg = new Uint8Array(w * h);
  const queue = [];
  const trySeed = (x, y) => {
    const p = y * w + x;
    const i = p * 4;
    if (!isBg[p] && dist(data[i], data[i + 1], data[i + 2], ...bg) < TOL) {
      isBg[p] = 1;
      queue.push(p);
    }
  };
  for (let x = 0; x < w; x++) {
    trySeed(x, 0);
    trySeed(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    trySeed(0, y);
    trySeed(w - 1, y);
  }
  while (queue.length) {
    const p = queue.pop();
    const x = p % w;
    const y = (p - x) / w;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const np = ny * w + nx;
      if (isBg[np]) continue;
      const ni = np * 4;
      if (dist(data[ni], data[ni + 1], data[ni + 2], ...bg) < TOL) {
        isBg[np] = 1;
        queue.push(np);
      }
    }
  }

  // Punch out background; feather pixels that touch it (anti-aliased rim).
  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    if (isBg[p]) {
      data[i + 3] = 0;
      continue;
    }
    const x = p % w;
    const y = (p - x) / w;
    let touchesBg = false;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) {
        touchesBg = true;
        break;
      }
      if (isBg[ny * w + nx]) {
        touchesBg = true;
        break;
      }
    }
    if (!touchesBg) continue;
    const d = dist(data[i], data[i + 1], data[i + 2], ...bg);
    const a = Math.max(0, Math.min(1, d / 150));
    if (a < 1) {
      // Un-blend from the background colour so no cream halo remains.
      for (let c = 0; c < 3; c++) {
        const v = bg[c] + (data[i + c] - bg[c]) / Math.max(a, 0.05);
        data[i + c] = Math.max(0, Math.min(255, Math.round(v)));
      }
      data[i + 3] = Math.round(a * 255);
    }
  }

  // Despeckle: drop tiny disconnected leftovers (paper texture, lighting
  // bands). Real satellites like sparkles are hundreds of pixels.
  const MIN_AREA = 200;
  const seen = new Uint8Array(w * h);
  for (let start = 0; start < w * h; start++) {
    if (seen[start] || data[start * 4 + 3] === 0) continue;
    const comp = [start];
    seen[start] = 1;
    for (let qi = 0; qi < comp.length; qi++) {
      const p = comp[qi];
      const x = p % w;
      const y = (p - x) / w;
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        const np = ny * w + nx;
        if (!seen[np] && data[np * 4 + 3] > 0) {
          seen[np] = 1;
          comp.push(np);
        }
      }
    }
    if (comp.length < MIN_AREA) {
      for (const p of comp) data[p * 4 + 3] = 0;
    }
  }

  // Trim to content, pad a little, resize.
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 6;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(w - 1, maxX + pad);
  maxY = Math.min(h - 1, maxY + pad);
  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;

  const scale = Math.min(1, MAX_EDGE / Math.max(cw, ch));
  const resized = sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: cw, height: ch })
    .resize(Math.round(cw * scale), Math.round(ch * scale));
  await (out.endsWith(".webp")
    ? resized.webp({ quality: 90, alphaQuality: 90 })
    : resized.png({ palette: true, quality: 90 })
  ).toFile(out);
  console.log(`wrote ${out}  crop ${cw}x${ch} -> ${Math.round(cw * scale)}x${Math.round(ch * scale)}`);
})();

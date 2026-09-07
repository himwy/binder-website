// Regenerates every site icon from the app's artwork (the Shiba with a binder).
//   node scripts/generate-icons.mjs [path-to-source-image]
// Source defaults to the app repo's assets/icon-source.webp so the website and
// the app never drift. Outputs (public/):
//   icons/binder-icon-1024|512|256.png  rounded-square app icon (transparent corners)
//   icons/binder-mark-256.png           the header mark, same rounded square at 256
//   icons/apple-touch-icon.png          180×180 opaque (iOS adds its own mask)
//   icons/favicon-60.png                60×60 rounded
//   favicon.ico                         16/32/48 multi-size (written by Python/PIL below)
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire("C:/Users/himhi/Downloads/binder/package.json");
const sharp = require("sharp");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = process.argv[2] || "C:/Users/himhi/Downloads/binder/assets/icon-source.webp";

const { data } = await sharp(src).extract({ left: 8, top: 8, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
const bg = { r: data[0], g: data[1], b: data[2] };

function roundedMask(size, radius) {
  return Buffer.from(`<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`);
}
async function rounded(size, out) {
  const art = await sharp(src).resize(size, size, { fit: "cover" }).flatten({ background: bg }).png().toBuffer();
  await sharp(art).composite([{ input: roundedMask(size, Math.round(size * 0.22)), blend: "dest-in" }]).png().toFile(path.join(root, "public", out));
  console.log("wrote", out, `${size}x${size}`);
}
async function opaque(size, out) {
  await sharp(src).resize(size, size, { fit: "cover" }).flatten({ background: bg }).removeAlpha().png().toFile(path.join(root, "public", out));
  console.log("wrote", out, `${size}x${size}`);
}

await rounded(1024, "icons/binder-icon-1024.png");
await rounded(512, "icons/binder-icon-512.png");
await rounded(256, "icons/binder-icon-256.png");
await rounded(256, "icons/binder-mark-256.png");
await rounded(60, "icons/favicon-60.png");
await opaque(180, "icons/apple-touch-icon.png");

// favicon.ico via PIL (sharp cannot write ICO).
const py = `
from PIL import Image
im = Image.open(r"${path.join(root, "public", "icons", "binder-icon-256.png")}").convert("RGBA")
im.save(r"${path.join(root, "public", "favicon.ico")}", sizes=[(16,16),(32,32),(48,48)])
print("wrote favicon.ico 16/32/48")
`;
console.log(execFileSync("python", ["-c", py]).toString().trim());

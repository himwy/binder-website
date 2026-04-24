// Generate a neutral placeholder PNG for the Spline fallback.
// Run once: `node scripts/make-placeholder.cjs`
const fs = require("node:fs");
const { createCanvas } = require("@napi-rs/canvas");
const W = 1200;
const H = 900;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#fafafa";
ctx.fillRect(0, 0, W, H);
ctx.fillStyle = "#b5b5bb";
ctx.font = "bold 20px sans-serif";
ctx.textAlign = "center";
ctx.fillText("SPLINE SCENE · COMING SOON", W / 2, H / 2);
fs.writeFileSync("public/hero-fallback.png", canvas.toBuffer("image/png"));
console.log("wrote public/hero-fallback.png");

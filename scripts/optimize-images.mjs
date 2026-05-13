#!/usr/bin/env node
// Generate AVIF + WebP variants and blurDataURL for every PNG in public/images/.
// Writes optimized files to public/images/optimized/ and a manifest to lib/image-meta.json.

import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { getPlaiceholder } from "plaiceholder";

const ROOT = path.resolve(process.cwd());
const SRC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(SRC_DIR, "optimized");
const META_PATH = path.join(ROOT, "lib", "image-meta.json");

const AVIF_QUALITY = 55;
const WEBP_QUALITY = 78;

async function ensureDir(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function processOne(file) {
  const srcPath = path.join(SRC_DIR, file);
  const base = path.basename(file, path.extname(file));
  const avifOut = path.join(OUT_DIR, `${base}.avif`);
  const webpOut = path.join(OUT_DIR, `${base}.webp`);

  const inputBuffer = await sharp(srcPath).toBuffer();
  const meta = await sharp(inputBuffer).metadata();

  await sharp(inputBuffer).avif({ quality: AVIF_QUALITY, effort: 4 }).toFile(avifOut);
  await sharp(inputBuffer).webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpOut);

  const { base64: blurDataURL } = await getPlaiceholder(inputBuffer, { size: 10 });

  const srcStat = await stat(srcPath);
  const avifStat = await stat(avifOut);
  const webpStat = await stat(webpOut);

  return {
    file,
    record: {
      original: `/images/${file}`,
      avif: `/images/optimized/${base}.avif`,
      webp: `/images/optimized/${base}.webp`,
      width: meta.width,
      height: meta.height,
      blurDataURL,
    },
    bytes: {
      original: srcStat.size,
      avif: avifStat.size,
      webp: webpStat.size,
    },
  };
}

async function main() {
  await ensureDir(OUT_DIR);
  await ensureDir(path.dirname(META_PATH));

  const entries = await readdir(SRC_DIR);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));

  console.log(`Optimizing ${pngs.length} PNGs from ${SRC_DIR}`);

  const manifest = {};
  let totalOriginal = 0;
  let totalAvif = 0;
  let totalWebp = 0;

  for (const file of pngs) {
    try {
      const { record, bytes } = await processOne(file);
      manifest[`/images/${file}`] = record;
      totalOriginal += bytes.original;
      totalAvif += bytes.avif;
      totalWebp += bytes.webp;
      const reductionAvif = (100 - (bytes.avif / bytes.original) * 100).toFixed(1);
      console.log(
        `  ${file}: ${(bytes.original / 1024).toFixed(0)}KB → AVIF ${(bytes.avif / 1024).toFixed(0)}KB (-${reductionAvif}%)`
      );
    } catch (err) {
      console.error(`  FAILED ${file}:`, err.message);
    }
  }

  await writeFile(META_PATH, JSON.stringify(manifest, null, 2) + "\n");

  const fmtMB = (n) => (n / 1024 / 1024).toFixed(2);
  console.log("\nDone.");
  console.log(`  Original total: ${fmtMB(totalOriginal)} MB`);
  console.log(`  AVIF total:     ${fmtMB(totalAvif)} MB  (-${(100 - (totalAvif / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`  WebP total:     ${fmtMB(totalWebp)} MB  (-${(100 - (totalWebp / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`  Manifest:       ${META_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

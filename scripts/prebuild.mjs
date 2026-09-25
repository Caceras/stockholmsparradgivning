// Runs before each build: copies self-hosted fonts from npm packages into
// public/fonts and generates the social share image (og.jpg).
import { mkdirSync, copyFileSync } from 'node:fs';
import sharp from 'sharp';

mkdirSync('public/fonts', { recursive: true });
const fonts = [
  ['@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2', 'newsreader-latin-wght-normal.woff2'],
  ['@fontsource-variable/newsreader/files/newsreader-latin-wght-italic.woff2', 'newsreader-latin-wght-italic.woff2'],
  ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter-latin-wght-normal.woff2'],
];
for (const [src, dest] of fonts) copyFileSync(`node_modules/${src}`, `public/fonts/${dest}`);

await sharp('src/assets/img/team-2026.webp')
  .resize(1200, 630, { fit: 'cover', position: 'top' })
  .jpeg({ quality: 72, progressive: true })
  .toFile('public/og.jpg');
console.log('fonts copied, og.jpg generated');

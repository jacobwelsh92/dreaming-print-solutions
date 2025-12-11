/**
 * Generate favicons and app icons from the source icon
 * Run with: node scripts/generate-favicons.mjs
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const sourceIcon = join(publicDir, 'images', 'logo-icon.png');

// Ensure directories exist
const appDir = join(publicDir, 'app');
if (!existsSync(appDir)) {
  mkdirSync(appDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generating favicons and app icons...\n');

  // Favicon sizes
  const faviconSizes = [16, 32, 48];

  // Apple touch icon
  const appleTouchSize = 180;

  // Android/PWA icons
  const androidSizes = [192, 512];

  // Generate favicon.ico (we'll use the 32x32 as the main favicon)
  await sharp(sourceIcon)
    .resize(32, 32)
    .toFile(join(publicDir, 'favicon.ico'));
  console.log('✓ favicon.ico (32x32)');

  // Generate favicon-16x16.png
  await sharp(sourceIcon)
    .resize(16, 16)
    .toFile(join(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  // Generate favicon-32x32.png
  await sharp(sourceIcon)
    .resize(32, 32)
    .toFile(join(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  // Apple touch icon
  await sharp(sourceIcon)
    .resize(appleTouchSize, appleTouchSize)
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log(`✓ apple-touch-icon.png (${appleTouchSize}x${appleTouchSize})`);

  // Android icons
  for (const size of androidSizes) {
    await sharp(sourceIcon)
      .resize(size, size)
      .toFile(join(publicDir, `android-chrome-${size}x${size}.png`));
    console.log(`✓ android-chrome-${size}x${size}.png`);
  }

  // App icons for Next.js (icon.png and apple-icon.png)
  await sharp(sourceIcon)
    .resize(512, 512)
    .toFile(join(appDir, 'icon.png'));
  console.log('✓ app/icon.png (512x512)');

  await sharp(sourceIcon)
    .resize(180, 180)
    .toFile(join(appDir, 'apple-icon.png'));
  console.log('✓ app/apple-icon.png (180x180)');

  // OG Image placeholder (we'll create a proper one later)
  // For now, use the square logo resized
  await sharp(join(publicDir, 'images', 'logo-square.png'))
    .resize(1200, 630, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFile(join(publicDir, 'og-image.png'));
  console.log('✓ og-image.png (1200x630)');

  console.log('\nAll icons generated successfully!');
}

generateIcons().catch(console.error);

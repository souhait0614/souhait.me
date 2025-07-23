import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

import type { RequireAllOrNone } from 'type-fest';
import sharp from 'sharp';

type ImageAsset = {
  filename: string;
} & RequireAllOrNone<{
  width: number;
  height: number;
}>;

export const imageAssets: Record<string, ImageAsset[]> = {
  'https://img.souhait.me/Souhait4_icon.png': [
    { filename: '/images/favicons/favicon.ico', width: 32, height: 32 },
    { filename: '/images/favicons/icon-192.png', width: 192, height: 192 },
    { filename: '/images/favicons/icon-512.png', width: 512, height: 512 },
    { filename: '/images/favicons/apple-touch-icon.png', width: 180, height: 180 },
    { filename: '/images/favicons/open-graph.png', width: 384, height: 384 },
  ],
  'https://img.souhait.me/Souhait4_portrait.png': [
    { filename: '/images/souhait-chan-portrait-small.webp', width: 272, height: 368 },
    { filename: '/images/souhait-chan-portrait-large.webp', width: 520, height: 700 },
  ],
  'https://img.souhait.me/Souhait4.png': [
    { filename: '/images/souhait-chan-full.webp', width: 640, height: 960 },
  ],
  'https://img.souhait.me/Souhait4_top.png': [
    { filename: '/images/souhait-chan.webp', width: 690, height: 960 },
  ],
  'https://img.souhait.me/art/sakananoonigiri1.png': [
    { filename: '/images/fan-arts/sakananoonigiri1.webp' },
  ],
};

const outputDir = path.join(process.cwd(), 'public');

async function downloadAssets() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  for (const [url, assets] of Object.entries(imageAssets)) {
    console.log(`Downloading ${url}...`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const buffer = await response.arrayBuffer();

      await Promise.all(
        assets.map(async (asset) => {
          const outputPath = path.join(outputDir, asset.filename);
          await mkdir(path.dirname(outputPath), { recursive: true });
          await sharp(buffer)
            .resize(asset.width, asset.height)
            .toFile(outputPath);

          console.log(`Resized ${url} to ${asset.filename}`);
        }),
      );
    } catch (error) {
      console.error(`Failed to process ${url}:`, error);
    } finally {
      console.log(`Finished processing ${url}`);
    }
  }
}

downloadAssets();

import sharp from 'sharp';
import { optimize } from 'svgo';
import { err, log, ok, TResultPromise, writeFile } from '../helper/utils';
import { DIR, EXTENSION, OUTPUT_DIR } from '../constants';
import { conf } from '../config';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

export const imageMin: () => Promise<
  TResultPromise<string, Error>
> = async () => {
  const { env } = conf;

  if (env === 'local') return ok('');

  try {
    const imagePaths = glob.sync(`${DIR.SRC}/**/*${EXTENSION.IMAGE}`);

    const promises: Promise<TResultPromise<string, Error>>[] = imagePaths.map(
      async (imagePath) => {
        const outputPath = imagePath.replace(
          new RegExp(`${DIR.SRC}/`),
          `${OUTPUT_DIR}/`
        );
        const outputDir = path.dirname(outputPath);
        fs.mkdirSync(outputDir, { recursive: true });

        const ext = path.extname(imagePath).toLowerCase();

        try {
          if (ext === '.svg') {
            // SVGの場合は SVGO で最適化
            const svgData = fs.readFileSync(imagePath, 'utf-8');
            const result = await optimize(svgData, { path: imagePath });
            await writeFile(outputPath, result.data);
          } else {
            // その他の画像は sharp で最適化
            await sharp(imagePath)
              .jpeg({ quality: 80 })
              .png({ quality: 80, compressionLevel: 8 })
              .gif()
              .toFile(outputPath);
          }

          return ok(outputPath);
        } catch (e: unknown) {
          const error = e as Error;
          log('error', `Error processing image ${imagePath}: ${error.message}`);
          return err(new Error(`Error processing image ${imagePath}`));
        }
      }
    );

    await Promise.all(promises);

    log('success', 'Images successfully optimized using Sharp and SVGO');
    return ok('success min images');
  } catch (e: unknown) {
    const error = e as Error;
    log('error', `Error processing images: ${error.message}`);
    return err(new Error('Error processing images'));
  }
};

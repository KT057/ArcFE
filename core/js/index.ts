import path from 'node:path';
import { DEFAULT_FILE, DIR, EXTENSION, OUTPUT_DIR } from '../constants';
import { copyFile, err, getDirsSync, log, ok } from '../helper/utils';
import { Chokidar } from '../helper/watch';
import { JsOption } from '../types';

const getPath = (dir: string) => {
  const replacePath = dir.replace(new RegExp(`${DIR.SRC}/`), '');
  const outputPath = path.join(OUTPUT_DIR, replacePath);

  return { outputPath };
};

const jsRender = (dir: string) => {
  const { outputPath } = getPath(dir);
  return copyFile(dir, outputPath);
};

export const jsRenders = async ({ entry, option }: JsOption) => {
  const { resolve, reject } = await getDirsSync(entry, option);

  if (reject || !resolve) {
    log(
      'error',
      `Error retrieving JS directories: ${reject ? reject.message : ''}`
    );
    return err(reject);
  }

  const promises = resolve.map((dir) => jsRender(dir));

  const results = await Promise.all(promises);
  const errs = results.filter((r) => r.err);

  if (errs.length > 0) {
    log('error', `Rendering errors occurred for JS`);
    return err(errs[0].reject);
  }

  log('success', `All JS files successfully copied.`);

  return ok('Successfully copied script');
};

export const watchJs = async ({ entry, option }: JsOption) => {
  const { resolve, reject } = await getDirsSync(entry, option);

  if (reject || !resolve) {
    log(
      'error',
      `Errors occurred during JS rendering. ${reject ? reject.message : ''}`
    );
    return err(reject);
  }

  const chokidar = new Chokidar(resolve);

  chokidar.watcher({
    change: async (path: string) => {
      log('success', `Starting JS watch in: ${path}`);

      await jsRender(path);
    }
  });
};

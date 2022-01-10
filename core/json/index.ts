import path from 'node:path';
import { DIR, OUTPUT_DIR } from '../constants';
import { copyFile, err, getDirsSync, log, ok } from '../helper/utils';
import { Chokidar } from '../helper/watch';
import { JsOption } from '../types';

const getPath = (dir: string) => {
  const replacePath = dir.replace(new RegExp(`${DIR.SRC}/`), '');
  const outputPath = path.join(OUTPUT_DIR, replacePath);

  return { outputPath };
};

const jsonRender = (dir: string) => {
  const { outputPath } = getPath(dir);
  return copyFile(dir, outputPath);
};

export const jsonRenders = async ({ entry, option }: JsOption) => {
  const { resolve, reject } = await getDirsSync(entry, option);

  if (reject || !resolve) {
    log(
      'error',
      `Error retrieving JSON directories: ${reject ? reject.message : ''}`
    );
    return err(reject);
  }

  const promises = resolve.map((dir) => jsonRender(dir));

  const results = await Promise.all(promises);
  const errs = results.filter((r) => r.err);

  if (errs.length > 0) {
    log('error', `Rendering errors occurred for JSON`);
    return err(errs[0].reject);
  }

  log('success', `All JSON files successfully copied.`);

  return ok('Successfully copied JSON');
};

export const watchJson = async ({ entry, option }: JsOption) => {
  const { resolve, reject } = await getDirsSync(entry, option);

  if (reject || !resolve) {
    log(
      'error',
      `Errors occurred during JSON rendering. ${reject ? reject.message : ''}`
    );
    return err(reject);
  }

  const chokidar = new Chokidar(resolve);

  chokidar.watcher({
    change: async (path: string) => {
      log('success', `Starting JSON watch in: ${path}`);

      await jsonRender(path);
    }
  });
};

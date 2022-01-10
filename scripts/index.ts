import { browser } from './browser';
import { conf } from './config';
import { DIR, EXTENSION } from './constants';
import { renderStyles, watchStyle } from './css';
import { checkDir, err, log, ok } from './helper/utils';
import { renderPugs, watchPug } from './html';
import { imageMin } from './image';
import { jsRenders } from './js';

const { env } = conf;

const renders = async () => {
  const promises = await Promise.all([
    renderPugs(`${DIR.SRC}/**/*${EXTENSION.PUG}`, {
      ignore: [`${DIR.SRC}/**/_*${EXTENSION.PUG}`]
    }),
    renderStyles(`${DIR.SRC}/**/*${EXTENSION.SCSS}`, {
      ignore: [`${DIR.SRC}/**/_*${EXTENSION.SCSS}`]
    }),
    jsRenders(),
    imageMin()
  ]);

  if (promises.some((r) => r.err)) {
    return err(new Error('✖︎ Failed to render all files'));
  }

  log('success', `Successfully rendered all files`);

  return ok('Successfully rendered all files');
};

// 監視の処理
const watch = async () => {
  await watchPug(`${DIR.SRC}/**/*${EXTENSION.PUG}`, {});
  await watchStyle(`${DIR.SRC}/**/*${EXTENSION.SCSS}`, {});
  browser();
};

void (async () => {
  switch (env) {
    case 'local': {
      if (!checkDir(DIR.DIST)) {
        const { reject } = await renders();

        if (reject) {
          log('error', `Failed to render all files ${reject.message})`);
          return;
        }

        await watch();

        return;
      }

      await Promise.all([renders(), watch()]);

      break;
    }

    default: {
      const { reject } = await renders();

      if (reject) {
        log('error', `Failed to render all files ${reject.message})`);
        return;
      }
    }
  }
})();

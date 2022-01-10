export { checkDir, log } from './helper/utils';
import { browser } from './browser';
import { DIR, EXTENSION } from './constants';
import { cssRenders, watchCss } from './css';
import { err, log, ok } from './helper/utils';
import { renderPugs, watchPug } from './html';
import { optimizeImages, watchOptimizeImage } from './image';
import { jsRenders, watchJs } from './js';
import { jsonRenders, watchJson } from './json';
import { phpRenders, watchPhp } from './php';
import { renderStyles, watchStyle } from './scss';
import { tsRenders, watchTs } from './ts';
export type RenderOption = {
  pugData: { [key: string]: any };
  noSharedItems?: boolean;
  runs: {
    js?: boolean;
    ts?: boolean;
    css?: boolean;
    scss?: boolean;
    image?: boolean;
    html?: boolean;
    php?: boolean;
    json?: boolean;
  };
};

export type WatchOption = {
  pugData: { [key: string]: any };
  noSharedItems?: boolean;
  runs: {
    js?: boolean;
    scss?: boolean;
    html?: boolean;
    css?: boolean;
    browser?: boolean;
    image?: boolean;
    php?: boolean;
    json?: boolean;
  };
};

export const renders = async ({
  pugData,
  noSharedItems,
  runs: { ts, scss, image, html, js, css, php, json }
}: RenderOption) => {
  const renderPromises = [];

  if (html) {
    renderPromises.push(
      renderPugs({
        entry: `${DIR.SRC}/**/*${EXTENSION.PUG}`,
        data: pugData,
        noSharedItems,
        option: {
          ignore: [`${DIR.SRC}/**/_*${EXTENSION.PUG}`]
        }
      })
    );
  }

  if (scss) {
    renderPromises.push(
      renderStyles({
        entry: `${DIR.SRC}/**/*${EXTENSION.SCSS}`,
        noSharedItems,
        option: {
          ignore: [`${DIR.SRC}/**/_*${EXTENSION.SCSS}`]
        }
      })
    );
  }

  if (css) {
    renderPromises.push(
      cssRenders({
        entry: `${DIR.SRC}/**/*${EXTENSION.CSS}`,
        option: {
          ignore: [`${DIR.SRC}/**/_*${EXTENSION.CSS}`]
        }
      })
    );
  }

  if (php) {
    renderPromises.push(
      phpRenders({
        entry: `${DIR.SRC}/**/*${EXTENSION.PHP}`,
        option: {}
      })
    );
  }

  if (ts) {
    renderPromises.push(tsRenders({ noSharedItems }));
  }

  if (js) {
    renderPromises.push(
      jsRenders({
        entry: `${DIR.SRC}/**/*${EXTENSION.JS}`,
        option: {
          ignore: [`${DIR.SRC}/**/_*${EXTENSION.JS}`]
        }
      })
    );
  }

  if (json) {
    renderPromises.push(
      jsonRenders({
        entry: `${DIR.SRC}/**/*${EXTENSION.JSON}`,
        option: {}
      })
    );
  }

  if (image) {
    renderPromises.push(optimizeImages());
  }

  const promises = await Promise.all(renderPromises);

  if (promises.some((r) => r.err)) {
    return err(new Error('✖︎ Failed to render all files'));
  }

  log('success', `Successfully rendered all files`);

  return ok('Successfully rendered all files');
};

// 監視の処理
export const watch = async ({
  pugData,
  noSharedItems,
  runs: { browser: openBrowser, scss, html, js, image, css, php, json }
}: WatchOption) => {
  if (html) {
    await watchPug({
      entry: `${DIR.SRC}/**/*${EXTENSION.PUG}`,
      data: pugData,
      option: {},
      noSharedItems
    });
  }

  if (scss) {
    await watchStyle({
      entry: `${DIR.SRC}/**/*${EXTENSION.SCSS}`,
      noSharedItems,
      option: {}
    });
  }

  if (css) {
    await watchCss({
      entry: `${DIR.SRC}/**/*${EXTENSION.CSS}`,
      option: {}
    });
  }

  if (php) {
    await watchPhp({
      entry: `${DIR.SRC}/**/*${EXTENSION.PHP}`,
      option: {}
    });
  }

  if (js) {
    await watchJs({
      entry: `${DIR.SRC}/**/*${EXTENSION.JS}`,
      option: {}
    });
  }

  if (json) {
    await watchJson({
      entry: `${DIR.SRC}/**/*${EXTENSION.JSON}`,
      option: {}
    });
  }

  if (image) {
    await watchOptimizeImage(`${DIR.SRC}/**/*${EXTENSION.IMAGE}`);
  }

  if (openBrowser) {
    browser({ noSharedItems });
  } else {
    await watchTs({
      entry: `${DIR.SRC}/**/*${EXTENSION.TS}`,
      option: {},
      noSharedItems
    });
  }
};

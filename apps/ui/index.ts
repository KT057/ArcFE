import {
  RenderOption,
  WatchOption,
  checkDir,
  log,
  renders,
  watch
} from '@core';

const env = process.env.NODE_ENV || 'local';

const buildRuns: RenderOption['runs'] = {
  html: true,
  scss: true,
  js: true,
  ts: true,
  image: true
};

const watchRuns: WatchOption['runs'] = {
  html: true,
  scss: true,
  js: true,
  image: true
};

const noSharedItems = true;

void (async () => {
  switch (env) {
    case 'local': {
      if (!checkDir('./dist')) {
        const { reject } = await renders({
          pugData: {},
          runs: buildRuns,
          noSharedItems
        });

        if (reject) {
          log('error', `Failed to render all files ${reject.message})`);
          return;
        }

        await watch({
          pugData: {},
          runs: watchRuns,
          noSharedItems
        });

        return;
      }

      await renders({
        pugData: {},
        runs: buildRuns,
        noSharedItems
      });

      await watch({
        pugData: {},
        runs: watchRuns,
        noSharedItems
      });

      break;
    }

    default: {
      const { reject } = await renders({
        pugData: {},
        runs: buildRuns,
        noSharedItems
      });

      if (reject) {
        log('error', `Failed to render all files ${reject.message})`);
        return;
      }
    }
  }
})();

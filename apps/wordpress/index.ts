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
  php: true,
  scss: true,
  ts: true,
  image: true,
  css: true,
  json: true
};

const watchRuns: WatchOption['runs'] = {
  php: true,
  scss: true,
  image: true,
  css: true,
  json: true
};

void (async () => {
  switch (env) {
    case 'local': {
      if (!checkDir('./dist')) {
        const { reject } = await renders({
          pugData: {},
          runs: buildRuns
        });

        if (reject) {
          log('error', `Failed to render all files ${reject.message})`);
          return;
        }

        await watch({
          pugData: {},
          runs: watchRuns
        });

        return;
      }

      await Promise.all([
        renders({
          pugData: {},
          runs: buildRuns
        }),
        watch({
          pugData: {},
          runs: watchRuns
        })
      ]);

      break;
    }

    default: {
      const { reject } = await renders({
        pugData: {},
        runs: buildRuns
      });

      if (reject) {
        log('error', `Failed to render all files ${reject.message})`);
        return;
      }
    }
  }
})();

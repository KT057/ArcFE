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
  pug: true,
  scss: true,
  javascript: true,
  typescript: true,
  image: true
};

const watchRuns: WatchOption['runs'] = {
  pug: true,
  scss: true,
  javascript: true,
  typescript: true,
  image: true
};

const noSharedItems = true;

void (async () => {
  switch (env) {
    case 'local': {
      if (!checkDir('./dist')) {
        const { reject } = await renders({
          runs: buildRuns,
          noSharedItems
        });

        if (reject) {
          log('error', `Failed to render all files ${reject.message})`);
          return;
        }

        await watch({
          runs: watchRuns,
          noSharedItems,
          scssOption: {
            renderOption: {
              entry: 'src/shared/styles/**/*.scss',
              option: {}
            }
          }
        });

        return;
      }

      await renders({
        runs: buildRuns,
        noSharedItems
      });

      await watch({
        runs: watchRuns,
        noSharedItems,
        scssOption: {
          renderOption: {
            entry: 'src/shared/styles/**/*.scss',
            option: {}
          }
        }
      });

      break;
    }

    default: {
      const { reject } = await renders({
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

import { tsOption } from 'types';
import webpack from 'webpack';
import {
  type TResultPromise,
  err,
  getDirsSync,
  log,
  ok
} from '../helper/utils';
import { Chokidar } from '../helper/watch';
import { webpackConf } from './webpack';

export const tsRenders = ({ noSharedItems }: { noSharedItems?: boolean }) => {
  return new Promise<TResultPromise<string, Error>>((resolve) => {
    webpack(webpackConf({ noSharedItems })).run((_, stats) => {
      if (!stats) return resolve(ok('Successfully built script'));

      if (stats.hasErrors()) {
        const errors = stats.toJson().errors;

        if (errors) {
          for (const error of errors) {
            log('error', error.message);
          }
        }

        resolve(err(new Error('Failed to build script')));
        return;
      }

      log('success', 'Successfully built script');

      resolve(ok('Successfully built script'));
    });
  });
};

export const watchTs = async ({ entry, option, noSharedItems }: tsOption) => {
  const { resolve, reject } = await getDirsSync(entry, option);

  if (reject || !resolve) {
    log(
      'error',
      `Errors occurred during TS rendering. ${reject ? reject.message : ''}`
    );
    return err(reject);
  }

  const chokidar = new Chokidar(resolve);

  chokidar.watcher({
    change: async (path: string) => {
      log('success', `Starting TS watch in: ${path}`);

      await tsRenders({ noSharedItems });
    }
  });
};

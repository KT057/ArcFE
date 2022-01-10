import webpack from 'webpack';

import webpackConf from './webpack.config';
import { ok, err, TResultPromise, log } from '../helper/utils';
import { conf } from '../config';

const { env } = conf;

export const jsRenders = () => {
  return new Promise<TResultPromise<string, Error>>((resolve) => {
    if (env === 'local') return resolve(ok('Successfully built script'));

    webpack(webpackConf).run((_, stats) => {
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

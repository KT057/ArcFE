import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { DIR } from '../constants';
import { webpackConf } from '../ts/webpack';

import { conf } from '../config';

const defaultStatsOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: true,
  cachedAssets: true,
  reasons: true,
  source: true,
  errorDetails: true
};

export const browser = ({ noSharedItems }: { noSharedItems?: boolean }) => {
  const bundle = webpack(webpackConf({ noSharedItems }));

  const { port } = conf;

  browserSync({
    notify: false,
    port,
    open: false,
    reloadOnRestart: true,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    },
    server: {
      baseDir: [DIR.SRC, DIR.DIST],
      middleware: [
        webpackDevMiddleware(bundle, {
          publicPath: '/',
          stats: defaultStatsOptions
        })
      ]
    }
  });
};

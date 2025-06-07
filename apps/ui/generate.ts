import { generateUIToAllPackages } from '@core';

(async () => {
  await generateUIToAllPackages({
    entries: ['src/**/*.ts', 'src/**/*.pug', 'src/**/*.scss'],
    ignore: ['src/shared/**/*', 'src/**/index.pug'],
    dist: {
      type: 'web',
      dir: 'src/shared/common'
    }
  });

  await generateUIToAllPackages({
    entries: ['src/**/*.ts', 'src/**/*.scss'],
    ignore: ['src/shared/**/*', 'src/**/index.pug'],
    dist: {
      type: 'wordpress',
      dir: 'src/shared/common'
    }
  });
})();

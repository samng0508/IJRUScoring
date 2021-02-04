const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
    // config
    //   .plugin('html')
    //   .tap(args => {
    //     args[0].meta = { viewport: 'width=device-width,initial-scale=1,user-scalable=no' };

    //     return args;
    //   })
  },
  publicPath: './',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
}
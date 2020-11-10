const path = require('path');


module.exports = (appInfo: any) => {
  const config: any = exports = {};

  config.keys = 'sakiel.secret.key';

  config.middleware = [
  ];

  config.proxy = true;

  config.static = {
    dir: path.join(appInfo.baseDir, 'app/public'),
    buffer: true,
    // gzip: true,
  };

  config.view = {
    root: path.resolve(appInfo.baseDir, 'app/view'),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.vpc = {
    ips: ['47.98.34.224'],
  };

  return config;
};

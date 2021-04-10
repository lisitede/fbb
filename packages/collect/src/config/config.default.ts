import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.keys = appInfo.name + '-secret-key';

  config.middleware = [];

  config.logger = {
    outputJSON: true,
    // @ts-ignore
    contextFormatter: meta => {
      const meta2 = { ...meta };
      delete meta2.paddingMessage;
      return JSON.stringify({ topic: '[C0ll3ct]', ...meta2 });
    },
  };

  config.static = {
    prefix: '/collect/',
    buffer: true,
    // gzip: true,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return config;
};

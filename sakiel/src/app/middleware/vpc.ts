import { Provide, ScopeEnum, Scope, Config } from '@midwayjs/decorator';
import { UnauthorizedError } from 'egg-errors';


@Provide('vpcMiddleware')
@Scope(ScopeEnum.Singleton)
export class VpcMiddleware {
  
  @Config('vpc')
  config;

  resolve() {
    return async (ctx, next) => {
      const proxy = ctx.request.ip;
      ctx.logger.info(proxy);
      if (this.config.ips.indexOf(proxy) < 0) {
        ctx.throw(new UnauthorizedError('ip not match'));
      }
      await next();
    }
  }
}

import { Provide, ScopeEnum, Scope } from '@midwayjs/decorator';


@Provide('extendMiddleware')
@Scope(ScopeEnum.Singleton)
export class ExtendMiddleware {
  
  resolve() {
    return async (ctx, next) => {
      Object.defineProperty(ctx.request, 'hosts', {
        get: function() {
          ctx.logger.info(ctx.request.headers);
          const host: String = ctx.request.headers['x-forwarded-host'];
          return host ? host.split(','): [];
        },
      });
      await next();
    }
  }
}

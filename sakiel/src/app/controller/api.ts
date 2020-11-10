import { Func, Inject, Provide } from '@midwayjs/decorator';
import { FaaSContext } from '@midwayjs/faas';


@Provide()
export class ApiController {

  @Inject()
  ctx: FaaSContext;

  @Func('api.ping')
  async ping() {
    return { code: 0, message: 'pong' };
  }

  @Func('api.get', { middleware: ['extendMiddleware', 'vpcMiddleware'] })
  async get() {
    return { code: 0, message: 'ok', data: {
      'protocol': this.ctx.request.protocol,
      'host': this.ctx.request.host,
      'hosts': this.ctx.request.hosts || false,
      'ip': this.ctx.request.ip,
      'ips': this.ctx.request.ips,
      'user-agent': this.ctx.headers['user-agent'],
    }};
  }

  @Func('api.curl')
  async curl() {
    const { status, headers, data, res } = await this.ctx.curl('http://forward.15f11.lisitede.com/get', {
      headers: {
        'x-forwarded-proto': 'https',
        'x-forwarded-host': 'httpbin.org'
      },
      contentType: 'json',
      dataType: 'json',
    });
    // const { status, headers, data, res } = await this.ctx.curl('https://httpbin.org/get', {
    //   contentType: 'json',
    //   dataType: 'json',
    // });
    return { status, headers, data, res };
  }
}

import { Inject, Provide, Controller, Get } from '@midwayjs/decorator';
import { Context } from 'egg';


@Provide()
@Controller('/httpbin')
export class ApiController {

  @Inject()
  ctx: Context;

  @Get('/ping')
  async ping() {
    return { code: 0, message: 'pong' };
  }

  @Get('/get')
  async get() {
    return {
      code: 0,
      message: 'ok',
      data: {
        'user-agent': this.ctx.headers['user-agent'],
      }
    };
  }
}

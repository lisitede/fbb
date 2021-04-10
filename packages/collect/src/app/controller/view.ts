import { Provide, Inject, Controller, Get, ContentType } from '@midwayjs/decorator';
import { Context } from 'egg';


@Provide()
@Controller('/')
export class ViewController {

  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    return 'view.ts';
  }

  @Get('/collect/home')
  async index() {
    return 'collect home ok';
  }

  @Get('/collect/collect.gif')
  @ContentType('image/gif')
  async gif() {
    const query = this.ctx.query;
    if (query.data) {
      // @ts-ignore
      query.data = JSON.parse(query.data);
    }
    this.ctx.logger.info(query);

    // const queries = this.ctx.queries;
    // this.ctx.logger.info(queries);

    const gif = 'R0lGODlhAQABAID/AP///wAAACwAAAAAAQABAAACAkQBADs=';
    const buffer = Buffer.from(gif, 'base64');
    this.ctx.body = buffer;
  }
}

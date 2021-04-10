import { Provide, Inject, Controller, Get } from '@midwayjs/decorator';
import { Context } from 'egg';


@Provide()
@Controller('/')
export class ViewController {

  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    return this.ctx.render('index.html', { slogan: 'Httpbin powered by Midway' });
  }

  @Get('/httpbin/home')
  async index() {
    return 'httpbin home ok';
  }
}

import { Provide, Inject, Controller, Func } from '@midwayjs/decorator';
// import { FaaSContext } from '@midwayjs/faas';
// import { ViewBase } from 'egg-view/index';


@Provide()
@Controller('/')
export class ViewController {

  @Inject()
  ctx: any; // FaaSContext, ViewBase

  // @Get('/')
  @Func('view.home')
  async home() {
    await this.ctx.render('home.html', { slogan: 'Httpbin powered by Midway' });
  }

  // @Get('/public/*')
  @Func('view.public')
  async public() {
  }
}

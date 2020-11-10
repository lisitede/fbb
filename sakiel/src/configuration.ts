import { Configuration } from '@midwayjs/decorator';

@Configuration({
  importConfigs: [
    './config/',
  ],
  imports: [
    '@midwayjs/egg',
  ]
})
export class ContainerConfiguratin {

}
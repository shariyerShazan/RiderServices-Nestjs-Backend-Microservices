import { Controller, Get } from '@nestjs/common';
import { LogginServicesService } from './loggin-services.service';

@Controller()
export class LogginServicesController {
  constructor(private readonly logginServicesService: LogginServicesService) {}

  @Get()
  getHello(): string {
    return this.logginServicesService.getHello();
  }
}

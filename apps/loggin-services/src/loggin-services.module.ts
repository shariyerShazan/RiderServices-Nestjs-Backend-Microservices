import { Module } from '@nestjs/common';
import { LogginServicesController } from './loggin-services.controller';
import { LogginServicesService } from './loggin-services.service';

@Module({
  imports: [],
  controllers: [LogginServicesController],
  providers: [LogginServicesService],
})
export class LogginServicesModule {}

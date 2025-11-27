import { Module } from '@nestjs/common';
import { LogginServicesController } from './loggin-services.controller';
import { LogginServicesService } from './loggin-services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.LOGGIN_DB_URL!)],
  controllers: [LogginServicesController],
  providers: [LogginServicesService],
})
export class LogginServicesModule {}

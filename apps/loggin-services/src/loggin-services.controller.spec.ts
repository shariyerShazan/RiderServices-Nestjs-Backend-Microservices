import { Test, TestingModule } from '@nestjs/testing';
import { LogginServicesController } from './loggin-services.controller';
import { LogginServicesService } from './loggin-services.service';

describe('LogginServicesController', () => {
  let logginServicesController: LogginServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LogginServicesController],
      providers: [LogginServicesService],
    }).compile();

    logginServicesController = app.get<LogginServicesController>(LogginServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(logginServicesController.getHello()).toBe('Hello World!');
    });
  });
});

import { Injectable } from '@nestjs/common';

@Injectable()
export class LogginServicesService {
  getHello(): string {
    return 'Loggin Services!!!';
  }
}

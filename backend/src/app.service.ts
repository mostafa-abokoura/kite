import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      status: 'success',
      message: 'Delivery Backend v1 is online and communicating seamlessly.',
      timestamp: new Date().toISOString(),
    };
  }
}

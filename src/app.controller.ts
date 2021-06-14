import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IApiResponse {
  data: [] | Record<string, any>;
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IApiResponse {
    return {
        data: [],
        message: "Berhasil",
    };
    // const users = UserModel.findAll();
    // return this.appService.getHello();
  }
}

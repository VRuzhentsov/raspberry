import {Controller, Get} from '@nestjs/common';
import {RaspberryService} from './raspberry.service.js';

@Controller()
export class RaspberryController {
  constructor(private readonly raspberryService: RaspberryService) {}

  @Get()
  getHello(): string {
    return this.raspberryService.getHello();
  }
}

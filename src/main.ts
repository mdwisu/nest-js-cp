import { Controller, Get, Module } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hello World!';
  }
}
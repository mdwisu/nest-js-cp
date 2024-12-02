import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
  @Get('/ads')
  getRootRoute() {
    return "Hello World!";
  }


  @Get('/contact')
  getContactPage() {
    return "Contact Page";
  }
  
  
}

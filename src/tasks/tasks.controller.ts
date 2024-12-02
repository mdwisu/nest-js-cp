import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('/')
  listTasks(@Query() query: any) {
    console.log(query['test']);

    return `tasks ${query['test']}`;
  }

  @Post('/')
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return id;
  }
}

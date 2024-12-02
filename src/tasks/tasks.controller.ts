import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get('/')
  listTasks(@Query() query: any) {
    console.log(query['test']);

    return `tasks ${query['test']}`;
  }

  @Post('/')
  createTask(@Body() body: CreateTaskDto) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return id;
  }
}

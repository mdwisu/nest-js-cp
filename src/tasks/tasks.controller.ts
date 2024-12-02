import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('/')
  listTasks() {
    return 'tasks';
  }

  @Post('/')
  createTask() {
    return 'create task';
  }

  @Get('/:id')
  getTask() {
    return 'get task';
  }
}

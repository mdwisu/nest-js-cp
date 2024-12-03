import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  listTasks() {
    return this.tasksService.findAll();
  }

  @Post('/')
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    const task = await this.tasksService.findOne(parseInt(id));

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
}

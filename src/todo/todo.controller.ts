import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To get all tasks wrt email.', summary: 'To get all the user tasks'})
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    return this.todoService.create(createTodoDto, userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To register a new user with email.', summary: 'Register a user with details'})
  @Get()
  async findAll(@UserEmail()
  userEmail: string) {
    return this.todoService.findAll(userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To get the specific user task.', summary: 'To get the specific user task'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id); //+id represents number
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To update a specific task wrt email.', summary: 'To update a specific user task'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:'To delete a specific user task.', summary: 'To delete a specific user task'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}

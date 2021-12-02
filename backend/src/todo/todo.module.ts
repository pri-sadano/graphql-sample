import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TodoConverter } from './todo.converter';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TodoService, TodoResolver, TodoConverter]
})
export class TodoModule {}

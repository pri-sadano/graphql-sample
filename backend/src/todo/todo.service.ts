import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo as TodoDto, TodoConnection as TodoConnectionDto, AddTodoInput, CloseTodoInput, DeleteTodoInput, TodoStatus } from '../graphql';
import { TodoConverter } from './todo.converter';

/**
 * Todo に関する処理を提供するクラス.
 */
@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService, private todoConverter: TodoConverter) {}

    /**
     * TODO を検索する.
     * @param cursor  検索カーソル
     * @returns TodoConnection
     */
    async searchTodos(cursor: string): Promise<TodoConnectionDto> {
        const skip = parseInt(cursor || '0')
        const take = 5
        const todos = await this.prisma.todo.findMany({
            skip: skip,
            take: take,
            orderBy: [{
                createdAt: 'asc'
            }]
        })
        const totalCount = await this.prisma.todo.count()
        return {
            nodes: todos.map((todo) => this.todoConverter.convert(todo)),
            pageInfo: {
                hasNextPage: take === todos.length,
                hasPreviousPage: skip > 0,
                startCursor: todos.length == 0 ? null : (skip + 1).toString(),
                endCursor: todos.length == 0 ? null : (skip + todos.length).toString()
            },
            totalCount: totalCount
        }
    }

    /**
     * TODO を登録する.
     * @param input TODO 登録情報
     * @returns 登録した TODO
     */
    async addTodo(input: AddTodoInput): Promise<TodoDto> {
        const todo = await this.prisma.todo.create({
            data: {
                id: uuidv4(),
                title: input.title,
                status: TodoStatus.OPEN
            }
        })
        return this.todoConverter.convert(todo)
    }

    /**
     * TODO を完了状態にする.
     * @param input TODO 完了情報
     * @returns 完了した TODO
     */
    async closeTodo(input: CloseTodoInput): Promise<TodoDto> {
        const todo = await this.prisma.todo.findUnique({
            where: {
                id: input.todoId
            }
        })
        if (!todo) {
            throw new NotFoundException(`Todo ${input.todoId} is not found.`);
        }
        const updated = await this.prisma.todo.update({
            data: {
                status: TodoStatus.CLOSED
            },
            where: {
                id: input.todoId
            }
        })
        return this.todoConverter.convert(updated)
    }

    /**
     * TODO を削除する.
     * @param input TODO 削除情報
     */
    async deleteTodo(input: DeleteTodoInput) {
        await this.prisma.todo.delete({
            where: {
                id: input.todoId
            }
        })
    }
}

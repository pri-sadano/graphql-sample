import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddTodoInput, AddTodoPayload, CloseTodoInput, CloseTodoPayload, DeleteTodoInput, DeleteTodoPayload, IMutation, IQuery, Node, TodoConnection } from 'src/graphql';
import { TodoService } from './todo.service';

/**
 * Todo に関する Resolver クラス.
 */
@Resolver()
export class TodoResolver implements IQuery, IMutation {
    constructor(private todoService: TodoService) {}

    @Query()
    node(@Args('id') id: string): Node | Promise<Node> {
        throw new Error('Method not implemented.');
    }

    /**
     * TODO を検索する.
     * @param cursor  検索カーソル
     * @returns TodoConnection
     */
    @Query()
    async searchTodos(@Args('cursor') cursor?: string): Promise<TodoConnection> {
        return this.todoService.searchTodos(cursor);
    }
    
    /**
     * TODO を登録する.
     * @param input TODO 登録情報
     * @returns TODO 登録結果
     */
    @Mutation()
    async addTodo(@Args('input') input?: AddTodoInput): Promise<AddTodoPayload> {
        const todo = await this.todoService.addTodo(input)
        return {
            clientMutationId: input.clientMutationId,
            todo: todo
        }
    }

    /**
     * TODO を完了状態にする.
     * @param input TODO 完了情報
     * @returns TODO 完了結果
     */
    @Mutation()
    async closeTodo(@Args('input') input?: CloseTodoInput): Promise<CloseTodoPayload> {
        const todo = await this.todoService.closeTodo(input)
        return {
            clientMutationId: input.clientMutationId,
            todo: todo
        }
    }

    /**
     * TODO を削除する.
     * @param input TODO 削除情報
     * @returns TODO 削除結果
     */
    @Mutation()
    async deleteTodo(@Args('input') input?: DeleteTodoInput): Promise<DeleteTodoPayload> {
        await this.todoService.deleteTodo(input)
        return {
            clientMutationId: input.clientMutationId
        }
    }
}

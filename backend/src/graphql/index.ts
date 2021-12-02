
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TodoStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}

export class AddTodoInput {
    clientMutationId: string;
    title?: Nullable<string>;
}

export class CloseTodoInput {
    clientMutationId: string;
    todoId: string;
}

export class DeleteTodoInput {
    clientMutationId: string;
    todoId: string;
}

export interface Node {
    id: string;
}

export class AddTodoPayload {
    clientMutationId: string;
    todo?: Nullable<Todo>;
}

export class CloseTodoPayload {
    clientMutationId: string;
    todo?: Nullable<Todo>;
}

export class DeleteTodoPayload {
    clientMutationId: string;
}

export abstract class IMutation {
    abstract addTodo(input?: Nullable<AddTodoInput>): Nullable<AddTodoPayload> | Promise<Nullable<AddTodoPayload>>;

    abstract closeTodo(input?: Nullable<CloseTodoInput>): Nullable<CloseTodoPayload> | Promise<Nullable<CloseTodoPayload>>;

    abstract deleteTodo(input?: Nullable<DeleteTodoInput>): Nullable<DeleteTodoPayload> | Promise<Nullable<DeleteTodoPayload>>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: Nullable<string>;
    endCursor?: Nullable<string>;
}

export abstract class IQuery {
    abstract node(id: string): Nullable<Node> | Promise<Nullable<Node>>;

    abstract searchTodos(cursor?: Nullable<string>): Nullable<TodoConnection> | Promise<Nullable<TodoConnection>>;
}

export class Todo implements Node {
    id: string;
    title?: Nullable<string>;
    status?: Nullable<TodoStatus>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class TodoConnection {
    edges?: Nullable<Nullable<TodoEdge>[]>;
    nodes?: Nullable<Nullable<Todo>[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export class TodoEdge {
    cursor: string;
    node?: Nullable<Todo>;
}

export type DateTime = any;
type Nullable<T> = T | null;

import { FC, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { graphql, useFragment, useMutation } from "react-relay";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Todo } from "../organisms/todo";
import { todoTemplate_TodoConnection$key } from "./__generated__/todoTemplate_TodoConnection.graphql";
import { todoTemplate_addTodo_Mutation } from "./__generated__/todoTemplate_addTodo_Mutation.graphql";
import { todoTemplate_closeTodo_Mutation } from "./__generated__/todoTemplate_closeTodo_Mutation.graphql";
import { todoTemplate_deleteTodo_Mutation } from "./__generated__/todoTemplate_deleteTodo_Mutation.graphql";

/**
 * コンポーネントの表示に必要なプロパティ.
 */
type Props = {
    data: todoTemplate_TodoConnection$key;
    next: (cursor: string | null) => void;
};

/**
 * GraphQL.
 */
const fragmentSpec = graphql`
  fragment todoTemplate_TodoConnection on TodoConnection {
    nodes {
      ...todo_Todo
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
`;

const mutationSpec_addTodo = graphql`
  mutation todoTemplate_addTodo_Mutation(
      $input: AddTodoInput
  ) {
    addTodo(input: $input) {
        todo {
            ...todo_Todo
        }
    }
  }
`;

const mutationSpec_closeTodo = graphql`
  mutation todoTemplate_closeTodo_Mutation(
      $input: CloseTodoInput
  ) {
    closeTodo(input: $input) {
        todo {
            ...todo_Todo
        }
    }
  }
`;

const mutationSpec_deleteTodo = graphql`
  mutation todoTemplate_deleteTodo_Mutation(
      $input: DeleteTodoInput
  ) {
    deleteTodo(input: $input) {
        clientMutationId
    }
  }
`;

/**
 * TODO 画面テンプレート.
 * @param props プロパティ
 * @returns コンポーネント
 */
export const TodoTemplate: FC<Props> = (props) => {
    const fragment = useFragment(fragmentSpec, props.data);
    const [title, setTitle] = useState<string>("");
    const [nodes, setNodes] = useState<any>([]);
    const pageInfo = fragment?.pageInfo;
    const cursor = pageInfo?.startCursor;
    useEffect(() => {
        if (cursor) {
            setNodes(nodes.concat(fragment?.nodes!))
        }
    }, [cursor])

    const [addTodo] = useMutation<todoTemplate_addTodo_Mutation>(mutationSpec_addTodo);
    const addTodoHandler = (title: string) => {
        if (title.length == 0) return;
        addTodo({
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    title: title
                }
            },
            onCompleted(data) {
                // 一覧に追加
                setNodes(nodes.concat([data.addTodo?.todo]))
            }
        })
    };

    const [closeTodo] = useMutation<todoTemplate_closeTodo_Mutation>(mutationSpec_closeTodo);
    const closeTodoHandler = (todoId: string, todoIndex: number) => {
        closeTodo({
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    todoId: todoId
                }
            },
            onCompleted(data) {
                // 一覧を置換
                setNodes(nodes.map((node: any, index: number) => index != todoIndex ? node : data.closeTodo?.todo))
            }
        })
    }

    const [deleteTodo] = useMutation<todoTemplate_deleteTodo_Mutation>(mutationSpec_deleteTodo);
    const deleteTodoHandler = (todoId: string, todoIndex: number) => {
        deleteTodo({
            variables: {
                input: {
                    clientMutationId: uuidv4(),
                    todoId: todoId
                }
            },
            onCompleted(data) {
                // 一覧から削除
                setNodes(nodes.filter((_: any, index: number) => index != todoIndex))
            }
        })
    }

    return (
        <div>
            <h1>TODO List</h1>
             <label>
                 Title:
                 <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
             </label>
             <button onClick={() => addTodoHandler(title)}>ADD</button>
            <InfiniteScroll
                dataLength={nodes.length}
                next={() => props.next(pageInfo?.endCursor)}
                hasMore={pageInfo?.hasNextPage}
                loader={null}
                style={{ overflowY: 'hidden' }}>
                {nodes.map((node: any, index: number) => {
                    return (
                        <Todo key={index} index={index} data={node} closeHandler={closeTodoHandler} deleteHandler={deleteTodoHandler} />
                    )
                })}
            </InfiniteScroll>
        </div>
    );
};

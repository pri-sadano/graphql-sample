import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { todo_Todo$key } from "./__generated__/todo_Todo.graphql";

/**
 * コンポーネントの表示に必要なプロパティ.
 */
type Props = {
    index: number;
    data: todo_Todo$key;
    closeHandler: (todoId: string, todoIndex: number) => void;
    deleteHandler: (todoId: string, todoIndex: number) => void;
};

/**
 * GraphQL.
 */
const fragmentSpec = graphql`
  fragment todo_Todo on Todo {
    id
    title
    status
  }
`;

/**
 * TODO.
 * @param props プロパティ
 * @returns コンポーネント
 */
export const Todo: FC<Props> = (props) => {
    const fragment = useFragment(fragmentSpec, props.data);
    return (
        <div>
            <span>{fragment.title}</span>
            <span className="todo-status">{fragment.status}</span>
            {
                fragment.status == "OPEN" && (
                    <button onClick={() => props.closeHandler(fragment.id, props.index)}>CLOSE</button>
                )
            }
            <button onClick={() => props.deleteHandler(fragment.id, props.index)}>DELETE</button>
        </div>
    );
};

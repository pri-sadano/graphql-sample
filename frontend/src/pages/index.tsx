import { FC, useState } from "react";
import useSWR from "swr";
import { fetchQuery, graphql, useRelayEnvironment } from "react-relay";
import { TodoTemplate } from "@/components/templates/todo-template";
import { pagesQuery } from "./__generated__/pagesQuery.graphql";

/**
 * コンポーネントの表示に必要なプロパティ.
 */
type Props = {};

/**
 * GraphQL.
 */
const querySpec = graphql`
  query pagesQuery($cursor: String) {
    searchTodos(cursor: $cursor) {
      ...todoTemplate_TodoConnection
    }
  }
`;

/**
 * TODO 画面.
 * @param props プロパティ
 * @returns コンポーネント
 */
const Index: FC<Props> = (props: Props) => {
  const [cursor, setCursor] = useState<string | null>("0");
  const environment = useRelayEnvironment();
  const variables = {
    cursor: cursor
  };
  const { data } = useSWR(
    cursor ? `/todos?page=${variables.cursor}` : null,
    () => fetchQuery<pagesQuery>(environment, querySpec, variables).toPromise()
  );
  return <TodoTemplate data={data?.searchTodos!} next={(nextCursor) => setCursor(nextCursor)} />;
};

export default Index;

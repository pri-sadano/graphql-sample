/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteTodoInput = {
    clientMutationId: string;
    todoId: string;
};
export type todoTemplate_deleteTodo_MutationVariables = {
    input?: DeleteTodoInput | null | undefined;
};
export type todoTemplate_deleteTodo_MutationResponse = {
    readonly deleteTodo: {
        readonly clientMutationId: string;
    } | null;
};
export type todoTemplate_deleteTodo_Mutation = {
    readonly response: todoTemplate_deleteTodo_MutationResponse;
    readonly variables: todoTemplate_deleteTodo_MutationVariables;
};



/*
mutation todoTemplate_deleteTodo_Mutation(
  $input: DeleteTodoInput
) {
  deleteTodo(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "kind": "LinkedField",
    "name": "deleteTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "todoTemplate_deleteTodo_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "todoTemplate_deleteTodo_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "257e1fee16620ad5635039976dd8807c",
    "id": null,
    "metadata": {},
    "name": "todoTemplate_deleteTodo_Mutation",
    "operationKind": "mutation",
    "text": "mutation todoTemplate_deleteTodo_Mutation(\n  $input: DeleteTodoInput\n) {\n  deleteTodo(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '26fe1b37e0fb99ea6d20ffc64efe004e';
export default node;

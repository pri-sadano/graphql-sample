/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CloseTodoInput = {
    clientMutationId: string;
    todoId: string;
};
export type todoTemplate_closeTodo_MutationVariables = {
    input?: CloseTodoInput | null | undefined;
};
export type todoTemplate_closeTodo_MutationResponse = {
    readonly closeTodo: {
        readonly todo: {
            readonly " $fragmentRefs": FragmentRefs<"todo_Todo">;
        } | null;
    } | null;
};
export type todoTemplate_closeTodo_Mutation = {
    readonly response: todoTemplate_closeTodo_MutationResponse;
    readonly variables: todoTemplate_closeTodo_MutationVariables;
};



/*
mutation todoTemplate_closeTodo_Mutation(
  $input: CloseTodoInput
) {
  closeTodo(input: $input) {
    todo {
      ...todo_Todo
      id
    }
  }
}

fragment todo_Todo on Todo {
  id
  title
  status
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "todoTemplate_closeTodo_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CloseTodoPayload",
        "kind": "LinkedField",
        "name": "closeTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "todo_Todo"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "todoTemplate_closeTodo_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CloseTodoPayload",
        "kind": "LinkedField",
        "name": "closeTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e882a832d7bb5d055474386683d10b5",
    "id": null,
    "metadata": {},
    "name": "todoTemplate_closeTodo_Mutation",
    "operationKind": "mutation",
    "text": "mutation todoTemplate_closeTodo_Mutation(\n  $input: CloseTodoInput\n) {\n  closeTodo(input: $input) {\n    todo {\n      ...todo_Todo\n      id\n    }\n  }\n}\n\nfragment todo_Todo on Todo {\n  id\n  title\n  status\n}\n"
  }
};
})();
(node as any).hash = '8fb24375ac4166fa5064b5d83d579940';
export default node;

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AddTodoInput = {
    clientMutationId: string;
    title?: string | null | undefined;
};
export type todoTemplate_addTodo_MutationVariables = {
    input?: AddTodoInput | null | undefined;
};
export type todoTemplate_addTodo_MutationResponse = {
    readonly addTodo: {
        readonly todo: {
            readonly " $fragmentRefs": FragmentRefs<"todo_Todo">;
        } | null;
    } | null;
};
export type todoTemplate_addTodo_Mutation = {
    readonly response: todoTemplate_addTodo_MutationResponse;
    readonly variables: todoTemplate_addTodo_MutationVariables;
};



/*
mutation todoTemplate_addTodo_Mutation(
  $input: AddTodoInput
) {
  addTodo(input: $input) {
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
    "name": "todoTemplate_addTodo_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
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
    "name": "todoTemplate_addTodo_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
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
    "cacheID": "303fa41ff0e12c430c7bc683fc890993",
    "id": null,
    "metadata": {},
    "name": "todoTemplate_addTodo_Mutation",
    "operationKind": "mutation",
    "text": "mutation todoTemplate_addTodo_Mutation(\n  $input: AddTodoInput\n) {\n  addTodo(input: $input) {\n    todo {\n      ...todo_Todo\n      id\n    }\n  }\n}\n\nfragment todo_Todo on Todo {\n  id\n  title\n  status\n}\n"
  }
};
})();
(node as any).hash = 'f6c595e7473bdba56789bc59f73b1b56';
export default node;

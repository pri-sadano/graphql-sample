/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type pagesQueryVariables = {
    cursor?: string | null | undefined;
};
export type pagesQueryResponse = {
    readonly searchTodos: {
        readonly " $fragmentRefs": FragmentRefs<"todoTemplate_TodoConnection">;
    } | null;
};
export type pagesQuery = {
    readonly response: pagesQueryResponse;
    readonly variables: pagesQueryVariables;
};



/*
query pagesQuery(
  $cursor: String
) {
  searchTodos(cursor: $cursor) {
    ...todoTemplate_TodoConnection
  }
}

fragment todoTemplate_TodoConnection on TodoConnection {
  nodes {
    ...todo_Todo
    id
  }
  pageInfo {
    hasNextPage
    startCursor
    endCursor
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
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "cursor",
    "variableName": "cursor"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "searchTodos",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "todoTemplate_TodoConnection"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodoConnection",
        "kind": "LinkedField",
        "name": "searchTodos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
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
    "cacheID": "c0ae0484ae7016e3df3c14ed65700f59",
    "id": null,
    "metadata": {},
    "name": "pagesQuery",
    "operationKind": "query",
    "text": "query pagesQuery(\n  $cursor: String\n) {\n  searchTodos(cursor: $cursor) {\n    ...todoTemplate_TodoConnection\n  }\n}\n\nfragment todoTemplate_TodoConnection on TodoConnection {\n  nodes {\n    ...todo_Todo\n    id\n  }\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n}\n\nfragment todo_Todo on Todo {\n  id\n  title\n  status\n}\n"
  }
};
})();
(node as any).hash = '5c3322745792159748e2b3a8b34bdcb9';
export default node;

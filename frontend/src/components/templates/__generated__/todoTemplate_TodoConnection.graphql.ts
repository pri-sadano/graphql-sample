/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type todoTemplate_TodoConnection = {
    readonly nodes: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"todo_Todo">;
    } | null> | null;
    readonly pageInfo: {
        readonly hasNextPage: boolean;
        readonly startCursor: string | null;
        readonly endCursor: string | null;
    };
    readonly " $refType": "todoTemplate_TodoConnection";
};
export type todoTemplate_TodoConnection$data = todoTemplate_TodoConnection;
export type todoTemplate_TodoConnection$key = {
    readonly " $data"?: todoTemplate_TodoConnection$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"todoTemplate_TodoConnection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "todoTemplate_TodoConnection",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "todo_Todo"
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
  "type": "TodoConnection",
  "abstractKey": null
};
(node as any).hash = 'c205714ddb38e5412aaa58a3bed4e6b6';
export default node;

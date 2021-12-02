/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TodoStatus = "CLOSED" | "OPEN" | "%future added value";
export type todo_Todo = {
    readonly id: string;
    readonly title: string | null;
    readonly status: TodoStatus | null;
    readonly " $refType": "todo_Todo";
};
export type todo_Todo$data = todo_Todo;
export type todo_Todo$key = {
    readonly " $data"?: todo_Todo$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"todo_Todo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "todo_Todo",
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
  "type": "Todo",
  "abstractKey": null
};
(node as any).hash = '2dc0f9ac063f0d0098785be3fa58a774';
export default node;

import { Injectable } from "@nestjs/common";

/**
 * DB モデルから GraphQL モデルへの変換器の基底クラス.
 */
@Injectable()
export abstract class BaseConverter<K, V> {
    /**
     * GraphQL モデルに変換する.
     * @param value DB モデル
     */
    public abstract convert(value: K): V;
}

import { BaseConverter } from "@/common/base.converter";
import { Todo } from "@prisma/client";
import { Todo as TodoDto, TodoStatus } from "@/graphql";

/**
 * Todo の値変換器.
 */
export class TodoConverter extends BaseConverter<Todo, TodoDto> {
    public convert(value: Todo): TodoDto {
        return {
            ...value,
            status: value.status as TodoStatus
        };
    }
}

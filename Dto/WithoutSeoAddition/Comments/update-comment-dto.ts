/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";

export interface UpdateCommentDto extends ModelDto {
    body: string;
    userId: string;
    parentId: string;
}

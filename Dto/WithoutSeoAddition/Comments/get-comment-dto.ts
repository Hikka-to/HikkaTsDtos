/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserDto } from "../../Users/get-user-dto";

export interface GetCommentDto extends ModelDto {
    body: string;
    user: GetUserDto;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
}

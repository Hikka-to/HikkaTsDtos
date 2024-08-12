/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";import { z } from 'zod';

export interface GetCommentDto extends ModelDto {
    body: string;
    user: GetUserDto;
    parentId: string;
    createdAt: Date;
    updatedAt: Date;
}

export const getCommentDtoSchema = z.object({
    body: z.string(),
    user: getUserDtoSchema,
    parentId: z.string().uuid(),
    createdAt: z.date(),
    updatedAt: z.date(),
    id: z.string().uuid()
});

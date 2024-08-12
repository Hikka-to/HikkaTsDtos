/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateCommentDto extends ModelDto {
    body: string;
    userId: string;
    parentId: string;
}

export const updateCommentDtoSchema = z.object({
    body: z.string().max(2048),
    userId: z.string().uuid(),
    parentId: z.string().uuid(),
    id: z.string().uuid()
});

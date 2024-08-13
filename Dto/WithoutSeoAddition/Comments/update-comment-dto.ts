/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateCommentDtoSchema = z.object({
    body: z.string().max(2048),
    userId: z.string().uuid(),
    parentId: z.string().uuid(),
    id: z.string().uuid()
});

export type UpdateCommentDto = z.infer<typeof updateCommentDtoSchema>;

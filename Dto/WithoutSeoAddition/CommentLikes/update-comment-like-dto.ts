/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateCommentLikeDtoSchema = z.object({
	'commentId': z.string().uuid(),
	'userId': z.string().uuid(),
	'isLiked': z.boolean(),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateCommentLikeDto = z.infer<typeof updateCommentLikeDtoSchema>;

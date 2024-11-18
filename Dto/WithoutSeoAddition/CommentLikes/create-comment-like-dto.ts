/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createCommentLikeDtoSchema = z.object({
	'commentId': z.string().uuid(),
	'userId': z.string().uuid(),
	'isLiked': z.boolean()
});

export type CreateCommentLikeDto = z.infer<typeof createCommentLikeDtoSchema>;

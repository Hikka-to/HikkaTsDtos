/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getReviewDtoSchema } from '../Reviews/get-review-dto';
import { getUserDtoSchema } from '../../Users/get-user-dto';
import { z } from 'zod';

export const getReviewLikeDtoSchema = z.object({
	'review': getReviewDtoSchema,
	'user': getUserDtoSchema,
	'isLiked': z.boolean(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetReviewLikeDto = z.infer<typeof getReviewLikeDtoSchema>;

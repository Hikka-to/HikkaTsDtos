/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateReviewDtoSchema = z.object({
	'animeRatingId': z.string().uuid(),
	'name': z.string().max(64),
	'body': z.string().max(2048),
	'updatedAt': z.date(),
	'createdAt': z.date(),
	'removedAt': z.date(),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateReviewDto = z.infer<typeof updateReviewDtoSchema>;

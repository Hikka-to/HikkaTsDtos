/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getAnimeRatingDtoSchema } from '../../Relation/AnimeRatings/get-anime-rating-dto';
import { z } from 'zod';

export const getReviewDtoSchema = z.object({
	'animeRating': getAnimeRatingDtoSchema,
	'name': z.string(),
	'body': z.string(),
	'updatedAt': z.date(),
	'createdAt': z.date(),
	'removedAt': z.date(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetReviewDto = z.infer<typeof getReviewDtoSchema>;

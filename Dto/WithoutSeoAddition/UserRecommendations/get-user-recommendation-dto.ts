/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getAnimeDtoSchema } from '../../WithSeoAddition/Animes/get-anime-dto';
import { getUserDtoSchema } from '../../Users/get-user-dto';
import { z } from 'zod';

export const getUserRecommendationDtoSchema = z.object({
	'user': getUserDtoSchema,
	'anime': getAnimeDtoSchema,
	'description': z.string(),
	'createdAt': z.date(),
	'updatedAt': z.date(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetUserRecommendationDto = z.infer<typeof getUserRecommendationDtoSchema>;

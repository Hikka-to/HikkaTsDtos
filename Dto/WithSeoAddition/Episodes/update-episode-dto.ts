/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateEpisodeDtoSchema = z.object({
	'animeId': z.string().uuid(),
	'name': z.string().max(128),
	'duration': z.number().int().min(0),
	'airDate': z.date(),
	'isFiller': z.boolean(),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateEpisodeDto = z.infer<typeof updateEpisodeDtoSchema>;

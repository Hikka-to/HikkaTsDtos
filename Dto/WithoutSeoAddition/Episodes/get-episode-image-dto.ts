/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getEpisodeImageDtoSchema = z.object({
	'episodeId': z.string().uuid(),
	'imageUrl': z.string(),
	'width': z.number().int(),
	'height': z.number().int(),
	'colors': z.array(z.number().int()),
	'id': z.string().uuid().regex(/\S/)
});

export type GetEpisodeImageDto = z.infer<typeof getEpisodeImageDtoSchema>;

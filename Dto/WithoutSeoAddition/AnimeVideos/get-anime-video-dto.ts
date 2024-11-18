/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getAnimeVideoDtoSchema = z.object({
	'animeVideoKindId': z.string().uuid(),
	'name': z.string(),
	'url': z.string(),
	'imageUrl': z.string(),
	'embedUrl': z.string(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetAnimeVideoDto = z.infer<typeof getAnimeVideoDtoSchema>;

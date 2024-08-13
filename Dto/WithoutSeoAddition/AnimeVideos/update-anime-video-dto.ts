/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateAnimeVideoDtoSchema = z.object({
    animeVideoKindId: z.string().uuid(),
    name: z.string().length(156),
    url: z.string().length(2048),
    imageUrl: z.string().length(2048),
    embedUrl: z.string().length(2048),
    id: z.string().uuid()
});

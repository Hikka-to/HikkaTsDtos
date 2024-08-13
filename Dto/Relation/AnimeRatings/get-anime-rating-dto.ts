/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';


export const getAnimeRatingDtoSchema = z.object({
    reviewId: z.string().uuid(),
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    number: z.number().int(),
    id: z.string().uuid()
});

export type GetAnimeRatingDto = z.infer<typeof getAnimeRatingDtoSchema>;

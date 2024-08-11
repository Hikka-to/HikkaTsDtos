/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateAnimeRatingDto {
    reviewId: string;
    userId: string;
    animeId: string;
    number: number;
}

export const createAnimeRatingDtoProperties: (keyof CreateAnimeRatingDto)[] = [
    'reviewId',
    'userId',
    'animeId',
    'number'
];

export const createAnimeRatingDtoSchema = z.object({
    reviewId: z.string().uuid(),
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    number: z.number().int().min(0).max(10)
});

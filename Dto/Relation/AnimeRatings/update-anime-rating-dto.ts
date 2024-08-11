/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateAnimeRatingDto extends ModelDto {
    reviewId: string;
    userId: string;
    animeId: string;
    number: number;
}

export const updateAnimeRatingDtoProperties: (keyof UpdateAnimeRatingDto)[] = [
    'reviewId',
    'userId',
    'animeId',
    'number'
];

export const updateAnimeRatingDtoSchema = z.object({
    reviewId: z.string().uuid(),
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    number: z.number().int().min(0).max(10),
    id: z.string().uuid().regex(/\S/)
});

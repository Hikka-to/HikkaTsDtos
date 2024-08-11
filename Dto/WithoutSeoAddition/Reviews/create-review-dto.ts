/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateReviewDto {
    animeRatingId: string;
    name: string;
    body: string;
    updatedAt: Date;
    createdAt: Date;
    removedAt: Date;
}

export const createReviewDtoProperties: (keyof CreateReviewDto)[] = [
    'animeRatingId',
    'name',
    'body',
    'updatedAt',
    'createdAt',
    'removedAt'
];

export const createReviewDtoSchema = z.object({
    animeRatingId: z.string().uuid(),
    name: z.string().length(64),
    body: z.string().length(2048),
    updatedAt: z.date(),
    createdAt: z.date(),
    removedAt: z.date()
});

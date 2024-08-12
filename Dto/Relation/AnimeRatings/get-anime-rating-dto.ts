/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAnimeRatingDto extends ModelDto {
    reviewId: string;
    userId: string;
    animeId: string;
    number: number;
}

export const getAnimeRatingDtoSchema = z.object({
    reviewId: z.string().uuid(),
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    number: z.number().int(),
    id: z.string().uuid()
});

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateReviewDto extends ModelDto {
    animeRatingId: string;
    name: string;
    body: string;
    updatedAt: Date;
    createdAt: Date;
    removedAt: Date;
}

export const updateReviewDtoSchema = z.object({
    animeRatingId: z.string().uuid(),
    name: z.string().length(64),
    body: z.string().length(2048),
    updatedAt: z.date(),
    createdAt: z.date(),
    removedAt: z.date(),
    id: z.string().uuid()
});

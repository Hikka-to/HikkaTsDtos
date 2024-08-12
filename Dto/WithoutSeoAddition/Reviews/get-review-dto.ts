/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeRatingDto, getAnimeRatingDtoSchema } from "../../Relation/AnimeRatings/get-anime-rating-dto";import { z } from 'zod';

export interface GetReviewDto extends ModelDto {
    animeRating: GetAnimeRatingDto;
    name: string;
    body: string;
    updatedAt: Date;
    createdAt: Date;
    removedAt: Date;
}

export const getReviewDtoSchema = z.object({
    animeRating: getAnimeRatingDtoSchema,
    name: z.string(),
    body: z.string(),
    updatedAt: z.date(),
    createdAt: z.date(),
    removedAt: z.date(),
    id: z.string().uuid()
});

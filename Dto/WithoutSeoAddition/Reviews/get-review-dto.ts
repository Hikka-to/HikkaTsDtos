/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetAnimeRatingDto } from "../../Relation/AnimeRatings/get-anime-rating-dto";

export interface GetReviewDto {
    animeRating: GetAnimeRatingDto;
    name: string;
    body: string;
    updatedAt: Date;
    createdAt: Date;
    removedAt: Date;
}

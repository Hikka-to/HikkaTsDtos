/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeRatingDto } from "../../Relation/AnimeRatings/get-anime-rating-dto";

export interface GetReviewDto extends ModelDto {
    animeRating: GetAnimeRatingDto;
    name: string;
    body: string;
    updatedAt: Date;
    createdAt: Date;
    removedAt: Date;
}

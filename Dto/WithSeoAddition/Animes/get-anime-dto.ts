/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";
import { GetKindDto } from "../Kinds/get-kind-dto";
import { GetStatusDto } from "../Statuses/get-status-dto";
import { GetPeriodDto } from "../Periods/get-period-dto";
import { GetRestrictedRatingDto } from "../RestrictedRatings/get-restricted-rating-dto";
import { GetSourceDto } from "../Sources/get-source-dto";
import { GetTagDto } from "../Tags/get-tag-dto";
import { GetCountryDto } from "../Countries/get-country-dto";
import { GetDubDto } from "../Dubs/get-dub-dto";
import { GetAnimeGroupDto } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";

export interface GetAnimeDto extends GetDtoWithSeoAddition {
    kind: GetKindDto;
    status: GetStatusDto;
    period: GetPeriodDto;
    restrictedRating: GetRestrictedRatingDto;
    source: GetSourceDto;
    tags: GetTagDto[];
    countries: GetCountryDto[];
    dubs: GetDubDto[];
    animeGroups: GetAnimeGroupDto[];
    name: string;
    imageName: string;
    romajiName: string;
    nativeName: string;
    posterPathUrl: string;
    posterColors: number[];
    avgDuration: number;
    howManyEpisodes: number;
    firstAirDate: Date;
    lastAirDate: Date;
    tmdbId: number;
    shikimoriId: number;
    shikimoriScore: number;
    tmdbScore: number;
    imdbScore: number;
    isPublished: boolean;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
}

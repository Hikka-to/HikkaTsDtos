/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";
import { GetKindDto, getKindDtoSchema } from "../Kinds/get-kind-dto";
import { GetStatusDto, getStatusDtoSchema } from "../Statuses/get-status-dto";
import { GetPeriodDto, getPeriodDtoSchema } from "../Periods/get-period-dto";
import { GetRestrictedRatingDto, getRestrictedRatingDtoSchema } from "../RestrictedRatings/get-restricted-rating-dto";
import { GetSourceDto, getSourceDtoSchema } from "../Sources/get-source-dto";
import { GetTagDto, getTagDtoSchema } from "../Tags/get-tag-dto";
import { GetCountryDto, getCountryDtoSchema } from "../Countries/get-country-dto";
import { GetDubDto, getDubDtoSchema } from "../Dubs/get-dub-dto";
import { GetAnimeGroupDto, getAnimeGroupDtoSchema } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";
import { GetLightAnimeDto, getLightAnimeDtoSchema } from "./get-light-anime-dto";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetAnimeDto extends GetDtoWithSeoAddition {
    kind: GetKindDto;
    status: GetStatusDto;
    period: GetPeriodDto;
    restrictedRating: GetRestrictedRatingDto;
    source: GetSourceDto;
    tags: GetTagDto[];
    countries: GetCountryDto[];
    dubs: GetDubDto[];
    relatedAnimeGroups: GetAnimeGroupDto[];
    seasonAnimeGroups: GetAnimeGroupDto[];
    similarAnimes: GetLightAnimeDto[];
    name: string;
    imageName: string;
    romajiName: string;
    nativeName: string;
    posterPathUrl: string;
    backdropPathUrl: string;
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

export const getAnimeDtoSchema = z.object({
    kind: getKindDtoSchema,
    status: getStatusDtoSchema,
    period: getPeriodDtoSchema,
    restrictedRating: getRestrictedRatingDtoSchema,
    source: getSourceDtoSchema,
    tags: z.array(getTagDtoSchema),
    countries: z.array(getCountryDtoSchema),
    dubs: z.array(getDubDtoSchema),
    relatedAnimeGroups: z.array(getAnimeGroupDtoSchema),
    seasonAnimeGroups: z.array(getAnimeGroupDtoSchema),
    similarAnimes: z.array(getLightAnimeDtoSchema),
    name: z.string(),
    imageName: z.string().nullable(),
    romajiName: z.string().nullable(),
    nativeName: z.string(),
    posterPathUrl: z.string(),
    backdropPathUrl: z.string().nullable(),
    posterColors: z.array(z.number().int().min(-2147483648).max(2147483647)),
    avgDuration: z.number(),
    howManyEpisodes: z.number().int(),
    firstAirDate: z.date(),
    lastAirDate: z.date(),
    tmdbId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullable(),
    shikimoriId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullable(),
    shikimoriScore: z.number(),
    tmdbScore: z.number(),
    imdbScore: z.number(),
    isPublished: z.boolean(),
    publishedAt: z.date().nullable(),
    updatedAt: z.date(),
    createdAt: z.date(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

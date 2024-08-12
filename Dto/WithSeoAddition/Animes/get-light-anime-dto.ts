/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetKindDto, getKindDtoSchema } from "../Kinds/get-kind-dto";
import { GetStatusDto, getStatusDtoSchema } from "../Statuses/get-status-dto";
import { GetPeriodDto, getPeriodDtoSchema } from "../Periods/get-period-dto";
import { GetRestrictedRatingDto, getRestrictedRatingDtoSchema } from "../RestrictedRatings/get-restricted-rating-dto";import { z } from 'zod';

export interface GetLightAnimeDto {
    kind: GetKindDto;
    status: GetStatusDto;
    period: GetPeriodDto;
    restrictedRating: GetRestrictedRatingDto;
    name: string;
    imageName: string;
    romajiName: string;
    nativeName: string;
    posterPathUrl: string;
    posterColors: number[];
    avgDuration: number;
    tmdbId: number;
    shikimoriId: number;
    shikimoriScore: number;
    tmdbScore: number;
    imdbScore: number;
    isPublished: boolean;
    publishedAt: Date;
}

export const getLightAnimeDtoSchema = z.object({
    kind: getKindDtoSchema,
    status: getStatusDtoSchema,
    period: getPeriodDtoSchema,
    restrictedRating: getRestrictedRatingDtoSchema,
    name: z.string(),
    imageName: z.string().nullable(),
    romajiName: z.string().nullable(),
    nativeName: z.string(),
    posterPathUrl: z.string(),
    posterColors: z.array(z.number().int().min(-2147483648).max(2147483647)),
    avgDuration: z.number(),
    tmdbId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullable(),
    shikimoriId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullable(),
    shikimoriScore: z.number(),
    tmdbScore: z.number(),
    imdbScore: z.number(),
    isPublished: z.boolean(),
    publishedAt: z.date().nullable()
});

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getKindDtoSchema } from "../Kinds/get-kind-dto";
import { getStatusDtoSchema } from "../Statuses/get-status-dto";
import { getPeriodDtoSchema } from "../Periods/get-period-dto";
import { getRestrictedRatingDtoSchema } from "../RestrictedRatings/get-restricted-rating-dto";import { z } from 'zod';

export const getLightAnimeDtoSchema = z.object({
    kind: getKindDtoSchema,
    status: getStatusDtoSchema,
    period: getPeriodDtoSchema,
    restrictedRating: getRestrictedRatingDtoSchema,
    name: z.string(),
    imageName: z.string().nullish(),
    romajiName: z.string().nullish(),
    nativeName: z.string(),
    posterPathUrl: z.string(),
    posterColors: z.array(z.number().int().min(-2147483648).max(2147483647)),
    avgDuration: z.number(),
    tmdbId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullish(),
    shikimoriId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullish(),
    shikimoriScore: z.number(),
    tmdbScore: z.number(),
    imdbScore: z.number(),
    isPublished: z.boolean(),
    publishedAt: z.date().nullish()
});

export type GetLightAnimeDto = z.infer<typeof getLightAnimeDtoSchema>;

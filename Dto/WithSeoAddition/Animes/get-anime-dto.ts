/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getKindDtoSchema } from "../Kinds/get-kind-dto";
import { getStatusDtoSchema } from "../Statuses/get-status-dto";
import { getPeriodDtoSchema } from "../Periods/get-period-dto";
import { getRestrictedRatingDtoSchema } from "../RestrictedRatings/get-restricted-rating-dto";
import { getSourceDtoSchema } from "../Sources/get-source-dto";
import { getTagDtoSchema } from "../Tags/get-tag-dto";
import { getLightCharacterDtoSchema } from "../Characters/get-light-character-dto";
import { getCountryDtoSchema } from "../Countries/get-country-dto";
import { getDubDtoSchema } from "../Dubs/get-dub-dto";
import { getAnimeGroupDtoSchema } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";
import { getLightAnimeDtoSchema } from "./get-light-anime-dto";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getAnimeDtoSchema = z.object({
    kind: getKindDtoSchema,
    status: getStatusDtoSchema,
    period: getPeriodDtoSchema,
    restrictedRating: getRestrictedRatingDtoSchema,
    source: getSourceDtoSchema,
    tags: z.array(getTagDtoSchema),
    characters: z.array(getLightCharacterDtoSchema),
    countries: z.array(getCountryDtoSchema),
    dubs: z.array(getDubDtoSchema),
    relatedAnimeGroups: z.array(getAnimeGroupDtoSchema),
    seasonAnimeGroups: z.array(getAnimeGroupDtoSchema),
    similarAnimes: z.array(getLightAnimeDtoSchema),
    name: z.string(),
    imageName: z.string().nullish(),
    romajiName: z.string().nullish(),
    nativeName: z.string(),
    posterPathUrl: z.string(),
    backdropPathUrl: z.string().nullish(),
    posterColors: z.array(z.number().int().min(-2147483648).max(2147483647)),
    avgDuration: z.number(),
    howManyEpisodes: z.number().int(),
    firstAirDate: z.date(),
    lastAirDate: z.date(),
    tmdbId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullish(),
    shikimoriId: z.number().int().min(-9223372036854775808).max(9223372036854775807).nullish(),
    shikimoriScore: z.number(),
    tmdbScore: z.number(),
    imdbScore: z.number(),
    isPublished: z.boolean(),
    publishedAt: z.date().nullish(),
    updatedAt: z.date(),
    createdAt: z.date(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type GetAnimeDto = z.infer<typeof getAnimeDtoSchema>;

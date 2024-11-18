/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getStatusDtoSchema } from '../Statuses/get-status-dto';
import { getRestrictedRatingDtoSchema } from '../RestrictedRatings/get-restricted-rating-dto';
import { getPeriodDtoSchema } from '../Periods/get-period-dto';
import { getKindDtoSchema } from '../Kinds/get-kind-dto';
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getLightAnimeDtoSchema = z.object({
	'kind': getKindDtoSchema,
	'status': getStatusDtoSchema,
	'period': getPeriodDtoSchema,
	'restrictedRating': getRestrictedRatingDtoSchema,
	'name': z.string(),
	'imageName': z.string().nullish(),
	'romajiName': z.string().nullish(),
	'nativeName': z.string(),
	'posterPathUrl': z.string(),
	'posterColors': z.array(z.number().int()),
	'avgDuration': z.number(),
	'tmdbId': z.number().int().nullish(),
	'shikimoriId': z.number().int().nullish(),
	'shikimoriScore': z.number(),
	'tmdbScore': z.number(),
	'imdbScore': z.number(),
	'isPublished': z.boolean(),
	'publishedAt': z.date().nullish(),
	'seoAddition': getSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type GetLightAnimeDto = z.infer<typeof getLightAnimeDtoSchema>;

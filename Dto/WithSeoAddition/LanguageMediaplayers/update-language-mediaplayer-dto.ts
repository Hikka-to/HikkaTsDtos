/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateLanguageMediaplayerDtoSchema = z.object({
	'mediaplayerId': z.string().uuid(),
	'languageId': z.string().uuid(),
	'episodeId': z.string().uuid(),
	'formatId': z.string().uuid(),
	'url': z.string().max(2048),
	'fileId': z.string().max(2048).nullish(),
	'startIntro': z.number().int().nullish(),
	'endIntro': z.number().int().nullish(),
	'startEnding': z.number().int().nullish(),
	'endEnding': z.number().int().nullish(),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateLanguageMediaplayerDto = z.infer<typeof updateLanguageMediaplayerDtoSchema>;

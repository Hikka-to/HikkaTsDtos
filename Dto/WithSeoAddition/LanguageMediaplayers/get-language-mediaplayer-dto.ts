/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getLanguageDtoSchema } from '../Languages/get-language-dto';
import { getFormatDtoSchema } from '../Formats/get-format-dto';
import { getEpisodeDtoSchema } from '../Episodes/get-episode-dto';
import { getMediaplayerDtoSchema } from '../../WithoutSeoAddition/Mediaplayers/get-mediaplayer-dto';
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getLanguageMediaplayerDtoSchema = z.object({
	'mediaplayer': getMediaplayerDtoSchema,
	'language': getLanguageDtoSchema,
	'episode': getEpisodeDtoSchema,
	'format': getFormatDtoSchema,
	'url': z.string(),
	'fileId': z.string().nullish(),
	'startIntro': z.number().int().nullish(),
	'endIntro': z.number().int().nullish(),
	'startEnding': z.number().int().nullish(),
	'endEnding': z.number().int().nullish(),
	'seoAddition': getSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type GetLanguageMediaplayerDto = z.infer<typeof getLanguageMediaplayerDtoSchema>;

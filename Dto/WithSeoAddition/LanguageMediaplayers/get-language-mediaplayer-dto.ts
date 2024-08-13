/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getMediaplayerDtoSchema } from "../../WithoutSeoAddition/Mediaplayers/get-mediaplayer-dto";
import { getLanguageDtoSchema } from "../Languages/get-language-dto";
import { getEpisodeDtoSchema } from "../Episodes/get-episode-dto";
import { getFormatDtoSchema } from "../Formats/get-format-dto";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getLanguageMediaplayerDtoSchema = z.object({
    mediaplayer: getMediaplayerDtoSchema,
    language: getLanguageDtoSchema,
    episode: getEpisodeDtoSchema,
    format: getFormatDtoSchema,
    url: z.string(),
    fileId: z.string().nullable().optional(),
    startIntro: z.number().int().min(0).max(4294967295).nullable().optional(),
    endIntro: z.number().int().min(0).max(4294967295).nullable().optional(),
    startEnding: z.number().int().min(0).max(4294967295).nullable().optional(),
    endEnding: z.number().int().min(0).max(4294967295).nullable().optional(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

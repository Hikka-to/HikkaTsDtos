/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";
import { GetMediaplayerDto, getMediaplayerDtoSchema } from "../../WithoutSeoAddition/Mediaplayers/get-mediaplayer-dto";
import { GetLanguageDto, getLanguageDtoSchema } from "../Languages/get-language-dto";
import { GetEpisodeDto, getEpisodeDtoSchema } from "../Episodes/get-episode-dto";
import { GetFormatDto, getFormatDtoSchema } from "../Formats/get-format-dto";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetLanguageMediaplayerDto extends GetDtoWithSeoAddition {
    mediaplayer: GetMediaplayerDto;
    language: GetLanguageDto;
    episode: GetEpisodeDto;
    format: GetFormatDto;
    url: string;
    fileId: string;
    startIntro: number;
    endIntro: number;
    startEnding: number;
    endEnding: number;
}

export const getLanguageMediaplayerDtoProperties: (keyof GetLanguageMediaplayerDto)[] = [
    'mediaplayer',
    'language',
    'episode',
    'format',
    'url',
    'fileId',
    'startIntro',
    'endIntro',
    'startEnding',
    'endEnding'
];

export const getLanguageMediaplayerDtoSchema = z.object({
    mediaplayer: getMediaplayerDtoSchema,
    language: getLanguageDtoSchema,
    episode: getEpisodeDtoSchema,
    format: getFormatDtoSchema,
    url: z.string(),
    fileId: z.string().nullable(),
    startIntro: z.number().int().nullable(),
    endIntro: z.number().int().nullable(),
    startEnding: z.number().int().nullable(),
    endEnding: z.number().int().nullable(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});

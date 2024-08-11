/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateLanguageMediaplayerDto extends UpdateDtoWithSeoAddition {
    mediaplayerId: string;
    languageId: string;
    episodeId: string;
    formatId: string;
    url: string;
    fileId: string;
    startIntro: number;
    endIntro: number;
    startEnding: number;
    endEnding: number;
}

export const updateLanguageMediaplayerDtoProperties: (keyof UpdateLanguageMediaplayerDto)[] = [
    'mediaplayerId',
    'languageId',
    'episodeId',
    'formatId',
    'url',
    'fileId',
    'startIntro',
    'endIntro',
    'startEnding',
    'endEnding'
];

export const updateLanguageMediaplayerDtoSchema = z.object({
    mediaplayerId: z.string().uuid(),
    languageId: z.string().uuid(),
    episodeId: z.string().uuid(),
    formatId: z.string().uuid(),
    url: z.string().length(2048),
    fileId: z.string().nullable().length(2048),
    startIntro: z.number().int().nullable(),
    endIntro: z.number().int().nullable(),
    startEnding: z.number().int().nullable(),
    endEnding: z.number().int().nullable(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});

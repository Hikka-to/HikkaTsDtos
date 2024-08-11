/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateLanguageMediaplayerDto extends CreateDtoWithSeoAddition {
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

export const createLanguageMediaplayerDtoProperties: (keyof CreateLanguageMediaplayerDto)[] = [
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

export const createLanguageMediaplayerDtoSchema = z.object({
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
    seoAddition: createSeoAdditionDtoSchema
});

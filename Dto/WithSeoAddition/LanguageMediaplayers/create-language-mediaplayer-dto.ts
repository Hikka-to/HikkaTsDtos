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

export const createLanguageMediaplayerDtoSchema = z.object({
    mediaplayerId: z.string().uuid(),
    languageId: z.string().uuid(),
    episodeId: z.string().uuid(),
    formatId: z.string().uuid(),
    url: z.string().length(2048),
    fileId: z.string().length(2048).nullable(),
    startIntro: z.number().int().min(0).max(4294967295).nullable(),
    endIntro: z.number().int().min(0).max(4294967295).nullable(),
    startEnding: z.number().int().min(0).max(4294967295).nullable(),
    endEnding: z.number().int().min(0).max(4294967295).nullable(),
    seoAddition: createSeoAdditionDtoSchema
});

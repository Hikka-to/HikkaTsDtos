/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createLanguageMediaplayerDtoSchema = z.object({
    mediaplayerId: z.string().uuid(),
    languageId: z.string().uuid(),
    episodeId: z.string().uuid(),
    formatId: z.string().uuid(),
    url: z.string().length(2048),
    fileId: z.string().length(2048).nullish(),
    startIntro: z.number().int().min(0).max(4294967295).nullish(),
    endIntro: z.number().int().min(0).max(4294967295).nullish(),
    startEnding: z.number().int().min(0).max(4294967295).nullish(),
    endEnding: z.number().int().min(0).max(4294967295).nullish(),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreateLanguageMediaplayerDto = z.infer<typeof createLanguageMediaplayerDtoSchema>;

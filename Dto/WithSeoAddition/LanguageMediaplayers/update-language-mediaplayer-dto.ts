/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateLanguageMediaplayerDtoSchema = z.object({
    mediaplayerId: z.string().uuid(),
    languageId: z.string().uuid(),
    episodeId: z.string().uuid(),
    formatId: z.string().uuid(),
    url: z.string().length(2048),
    fileId: z.string().length(2048).nullable().optional(),
    startIntro: z.number().int().min(0).max(4294967295).nullable().optional(),
    endIntro: z.number().int().min(0).max(4294967295).nullable().optional(),
    startEnding: z.number().int().min(0).max(4294967295).nullable().optional(),
    endEnding: z.number().int().min(0).max(4294967295).nullable().optional(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});

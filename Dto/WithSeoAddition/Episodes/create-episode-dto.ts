/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createEpisodeDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string().length(128),
    duration: z.number().int().min(0).max(2147483647),
    airDate: z.date(),
    isFiller: z.boolean(),
    seoAddition: createSeoAdditionDtoSchema
});

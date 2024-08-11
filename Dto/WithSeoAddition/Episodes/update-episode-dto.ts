/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateEpisodeDto extends UpdateDtoWithSeoAddition {
    animeId: string;
    name: string;
    duration: number;
    airDate: Date;
    isFiller: boolean;
}

export const updateEpisodeDtoProperties: (keyof UpdateEpisodeDto)[] = [
    'animeId',
    'name',
    'duration',
    'airDate',
    'isFiller'
];

export const updateEpisodeDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string().length(128),
    duration: z.number().int().min(0).max(∞),
    airDate: z.date(),
    isFiller: z.boolean(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});

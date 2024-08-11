/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetEpisodeDto extends GetDtoWithSeoAddition {
    animeId: string;
    name: string;
    duration: number;
    airDate: Date;
    isFiller: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export const getEpisodeDtoProperties: (keyof GetEpisodeDto)[] = [
    'animeId',
    'name',
    'duration',
    'airDate',
    'isFiller',
    'updatedAt',
    'createdAt'
];

export const getEpisodeDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string(),
    duration: z.number().int(),
    airDate: z.date(),
    isFiller: z.boolean(),
    updatedAt: z.date(),
    createdAt: z.date(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});

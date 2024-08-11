/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateRelatedDto {
    animeId: string;
    animeGroupId: string;
    relatedTypeId: string;
}

export const createRelatedDtoProperties: (keyof CreateRelatedDto)[] = [
    'animeId',
    'animeGroupId',
    'relatedTypeId'
];

export const createRelatedDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    relatedTypeId: z.string().uuid()
});

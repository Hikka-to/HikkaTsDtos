/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetRelatedDto extends ModelDto {
    animeId: string;
    animeGroupId: string;
    relatedTypeId: string;
}

export const getRelatedDtoProperties: (keyof GetRelatedDto)[] = [
    'animeId',
    'animeGroupId',
    'relatedTypeId'
];

export const getRelatedDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    relatedTypeId: z.string().uuid(),
    id: z.string().uuid().regex(/\S/)
});

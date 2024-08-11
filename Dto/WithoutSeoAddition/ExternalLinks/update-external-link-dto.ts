/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateExternalLinkDto extends ModelDto {
    animeId: string;
    url: string;
}

export const updateExternalLinkDtoProperties: (keyof UpdateExternalLinkDto)[] = [
    'animeId',
    'url'
];

export const updateExternalLinkDtoSchema = z.object({
    animeId: z.string().uuid(),
    url: z.string().length(2048),
    id: z.string().uuid().regex(/\S/)
});

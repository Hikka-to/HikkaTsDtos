/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetExternalLinkDto extends ModelDto {
    animeId: string;
    url: string;
}

export const getExternalLinkDtoProperties: (keyof GetExternalLinkDto)[] = [
    'animeId',
    'url'
];

export const getExternalLinkDtoSchema = z.object({
    animeId: z.string().uuid(),
    url: z.string(),
    id: z.string().uuid().regex(/\S/)
});

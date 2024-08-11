/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetMediaplayerDto extends ModelDto {
    name: string;
    icon: string;
}

export const getMediaplayerDtoProperties: (keyof GetMediaplayerDto)[] = [
    'name',
    'icon'
];

export const getMediaplayerDtoSchema = z.object({
    name: z.string(),
    icon: z.string(),
    id: z.string().uuid().regex(/\S/)
});

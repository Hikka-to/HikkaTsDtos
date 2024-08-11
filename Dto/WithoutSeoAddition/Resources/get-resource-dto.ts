/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetResourceDto extends ModelDto {
    slug: string;
}

export const getResourceDtoProperties: (keyof GetResourceDto)[] = [
    'slug'
];

export const getResourceDtoSchema = z.object({
    slug: z.string(),
    id: z.string().uuid().regex(/\S/)
});

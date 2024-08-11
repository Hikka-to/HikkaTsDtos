/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface ModelDto {
    id: string;
}

export const modelDtoProperties: (keyof ModelDto)[] = [
    'id'
];

export const modelDtoSchema = z.object({
    id: z.string().uuid().regex(/\S/)
});

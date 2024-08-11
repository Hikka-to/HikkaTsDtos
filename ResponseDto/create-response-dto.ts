/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateResponseDto {
    id: string;
}

export const createResponseDtoProperties: (keyof CreateResponseDto)[] = [
    'id'
];

export const createResponseDtoSchema = z.object({
    id: z.string().uuid()
});

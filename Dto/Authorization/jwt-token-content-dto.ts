/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface JwtTokenContentDto {
    email: string;
    id: string;
    role: string;
}

export const jwtTokenContentDtoSchema = z.object({
    email: z.string().nullable(),
    id: z.string().nullable(),
    role: z.string().nullable()
});

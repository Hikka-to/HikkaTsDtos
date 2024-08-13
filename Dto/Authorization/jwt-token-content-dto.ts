/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const jwtTokenContentDtoSchema = z.object({
    email: z.string().nullable().optional(),
    id: z.string().nullable().optional(),
    role: z.string().nullable().optional()
});

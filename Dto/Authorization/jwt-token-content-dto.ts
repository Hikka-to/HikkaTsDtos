/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const jwtTokenContentDtoSchema = z.object({
    email: z.string().nullish(),
    id: z.string().nullish(),
    role: z.string().nullish()
});

export type JwtTokenContentDto = z.infer<typeof jwtTokenContentDtoSchema>;

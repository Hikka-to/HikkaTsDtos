/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const registratedResponseUserDtoSchema = z.object({
    message: z.string(),
    jwtToken: z.string(),
    id: z.string().uuid()
});

export type RegistratedResponseUserDto = z.infer<typeof registratedResponseUserDtoSchema>;

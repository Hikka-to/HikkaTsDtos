/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const loginResponseUserDtoSchema = z.object({
    token: z.string()
});

export type LoginResponseUserDto = z.infer<typeof loginResponseUserDtoSchema>;

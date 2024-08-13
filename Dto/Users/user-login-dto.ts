/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const userLoginDtoSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(/\S/)
});

export type UserLoginDto = z.infer<typeof userLoginDtoSchema>;

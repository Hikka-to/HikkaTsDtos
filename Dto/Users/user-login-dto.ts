/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface UserLoginDto {
    email: string;
    password: string;
}

export const userLoginDtoProperties: (keyof UserLoginDto)[] = [
    'email',
    'password'
];

export const userLoginDtoSchema = z.object({
    email: z.string().email(),
    password: z.string().regex(/\S/)
});

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface LoginResponseUserDto {
    token: string;
}

export const loginResponseUserDtoProperties: (keyof LoginResponseUserDto)[] = [
    'token'
];

export const loginResponseUserDtoSchema = z.object({
    token: z.string()
});

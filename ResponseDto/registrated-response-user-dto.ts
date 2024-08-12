/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../Shared/model-dto";import { z } from 'zod';

export interface RegistratedResponseUserDto extends ModelDto {
    message: string;
    jwtToken: string;
}

export const registratedResponseUserDtoSchema = z.object({
    message: z.string(),
    jwtToken: z.string(),
    id: z.string().uuid()
});

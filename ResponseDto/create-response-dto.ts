/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createResponseDtoSchema = z.object({
    id: z.string().uuid()
});

export type CreateResponseDto = z.infer<typeof createResponseDtoSchema>;

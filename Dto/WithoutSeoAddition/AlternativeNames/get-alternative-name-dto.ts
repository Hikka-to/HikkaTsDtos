/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';


export const getAlternativeNameDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string(),
    id: z.string().uuid()
});

export type GetAlternativeNameDto = z.infer<typeof getAlternativeNameDtoSchema>;

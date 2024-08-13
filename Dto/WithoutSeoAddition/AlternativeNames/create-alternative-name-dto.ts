/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createAlternativeNameDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string().length(156)
});

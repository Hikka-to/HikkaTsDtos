/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getMediaplayerDtoSchema = z.object({
    name: z.string(),
    icon: z.string(),
    id: z.string().uuid()
});

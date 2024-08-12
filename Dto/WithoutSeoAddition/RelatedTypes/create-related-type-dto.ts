/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateRelatedTypeDto {
    name: string;
}

export const createRelatedTypeDtoSchema = z.object({
    name: z.string().length(128)
});

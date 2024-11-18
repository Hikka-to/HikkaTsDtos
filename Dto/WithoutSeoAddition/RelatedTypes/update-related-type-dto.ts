/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateRelatedTypeDtoSchema = z.object({
	'name': z.string().max(128),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateRelatedTypeDto = z.infer<typeof updateRelatedTypeDtoSchema>;

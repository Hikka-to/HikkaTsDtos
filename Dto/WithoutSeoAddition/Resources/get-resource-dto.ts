/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getResourceDtoSchema = z.object({
	'slug': z.string(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetResourceDto = z.infer<typeof getResourceDtoSchema>;

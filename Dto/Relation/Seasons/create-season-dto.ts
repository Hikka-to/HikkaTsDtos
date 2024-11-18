/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createSeasonDtoSchema = z.object({
	'animeId': z.string().uuid(),
	'animeGroupId': z.string().uuid(),
	'name': z.string()
});

export type CreateSeasonDto = z.infer<typeof createSeasonDtoSchema>;

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createMediaplayerDtoSchema = z.object({
	'name': z.string().max(128),
	'icon': z.string().max(2048)
});

export type CreateMediaplayerDto = z.infer<typeof createMediaplayerDtoSchema>;

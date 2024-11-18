/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createEmojiGroupDtoSchema = z.object({
	'name': z.string().max(64),
	'slug': z.string().max(128)
});

export type CreateEmojiGroupDto = z.infer<typeof createEmojiGroupDtoSchema>;

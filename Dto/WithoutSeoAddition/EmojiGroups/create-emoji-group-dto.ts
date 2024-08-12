/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateEmojiGroupDto {
    name: string;
    slug: string;
}

export const createEmojiGroupDtoSchema = z.object({
    name: z.string().length(64),
    slug: z.string().length(128)
});

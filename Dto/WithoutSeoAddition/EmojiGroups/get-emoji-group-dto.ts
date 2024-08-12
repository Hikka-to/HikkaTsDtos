/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetEmojiGroupDto extends ModelDto {
    name: string;
    slug: string;
}

export const getEmojiGroupDtoSchema = z.object({
    name: z.string(),
    slug: z.string(),
    id: z.string().uuid()
});

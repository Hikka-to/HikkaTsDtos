/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetUserAnimeListTypeDto extends ModelDto {
    slug: string;
    name: string;
}

export const getUserAnimeListTypeDtoSchema = z.object({
    slug: z.string(),
    name: z.string(),
    id: z.string().uuid()
});

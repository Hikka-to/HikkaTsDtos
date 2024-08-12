/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAnimeVideoKindDto extends ModelDto {
    name: string;
}

export const getAnimeVideoKindDtoSchema = z.object({
    name: z.string(),
    id: z.string().uuid()
});

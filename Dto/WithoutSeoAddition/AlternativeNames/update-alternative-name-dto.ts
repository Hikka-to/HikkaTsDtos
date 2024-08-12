/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateAlternativeNameDto extends ModelDto {
    animeId: string;
    name: string;
}

export const updateAlternativeNameDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string().length(156),
    id: z.string().uuid()
});

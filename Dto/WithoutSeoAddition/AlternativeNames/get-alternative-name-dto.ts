/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAlternativeNameDto extends ModelDto {
    animeId: string;
    name: string;
}

export const getAlternativeNameDtoSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string(),
    id: z.string().uuid()
});

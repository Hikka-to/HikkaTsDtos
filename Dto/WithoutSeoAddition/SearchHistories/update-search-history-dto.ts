/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateSearchHistoryDto extends ModelDto {
    query: string;
    createAt: Date;
}

export const updateSearchHistoryDtoProperties: (keyof UpdateSearchHistoryDto)[] = [
    'query',
    'createAt'
];

export const updateSearchHistoryDtoSchema = z.object({
    query: z.string().length(255),
    createAt: z.date(),
    id: z.string().uuid().regex(/\S/)
});

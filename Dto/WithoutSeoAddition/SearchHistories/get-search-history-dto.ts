/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetSearchHistoryDto extends ModelDto {
    query: string;
    createAt: Date;
}

export const getSearchHistoryDtoProperties: (keyof GetSearchHistoryDto)[] = [
    'query',
    'createAt'
];

export const getSearchHistoryDtoSchema = z.object({
    query: z.string(),
    createAt: z.date(),
    id: z.string().uuid().regex(/\S/)
});

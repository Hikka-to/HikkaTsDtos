/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface FilterDto {
    searchTerm: string;
    column: string;
    isStrict: boolean;
}

export const filterDtoProperties: (keyof FilterDto)[] = [
    'searchTerm',
    'column',
    'isStrict'
];

export const filterDtoSchema = z.object({
    searchTerm: z.string(),
    column: z.string(),
    isStrict: z.boolean()
});

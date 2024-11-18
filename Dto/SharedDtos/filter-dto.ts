/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { filterTypeSchema } from './filter-type';
import { z } from 'zod';

export const filterDtoSchema = z.object({
	'searchTerm': z.string(),
	'column': z.string(),
	'filterType': filterTypeSchema,
	'negate': z.boolean()
});

export type FilterDto = z.infer<typeof filterDtoSchema>;

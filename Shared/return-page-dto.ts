/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const returnPageDtoSchema = <T extends z.ZodTypeAny>(t: T) => z.object({
    models: z.array(t),
    howManyPages: z.number().int()
});

export type ReturnPageDto<T> = z.infer<ReturnType<typeof returnPageDtoSchema<z.ZodType<T>>>>;

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z, ZodTypeAny } from 'zod';

export const returnPageDtoSchema = (t: ZodTypeAny) => z.object({
    models: z.array(t),
    howManyPages: z.number().int()
});

export type ReturnPageDto = z.infer<typeof returnPageDtoSchema>;

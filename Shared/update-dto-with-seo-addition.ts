/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { updateSeoAdditionDtoSchema } from "../Dto/SeoAdditions/update-seo-addition-dto";import { z } from 'zod';

export const updateDtoWithSeoAdditionSchema = z.object({
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type UpdateDtoWithSeoAddition = z.infer<typeof updateDtoWithSeoAdditionSchema>;

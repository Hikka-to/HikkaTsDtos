/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateCountryDtoSchema = z.object({
    name: z.string().max(64),
    icon: z.string().max(2048),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type UpdateCountryDto = z.infer<typeof updateCountryDtoSchema>;

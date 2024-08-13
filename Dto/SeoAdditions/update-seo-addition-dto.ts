/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { socialTypeSchema } from "./social-type";import { z } from 'zod';

export const updateSeoAdditionDtoSchema = z.object({
    id: z.string().uuid(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().nullable().optional(),
    imageAlt: z.string().nullable().optional(),
    socialTitle: z.string().nullable().optional(),
    socialType: socialTypeSchema.nullable().optional(),
    socialImage: z.string().nullable().optional(),
    socialImageAlt: z.string().nullable().optional()
});

export type UpdateSeoAdditionDto = z.infer<typeof updateSeoAdditionDtoSchema>;

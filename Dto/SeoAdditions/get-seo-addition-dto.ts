/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { socialTypeSchema } from "./social-type";import { z } from 'zod';

export const getSeoAdditionDtoSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().nullable().optional(),
    imageAlt: z.string().nullable().optional(),
    socialTitle: z.string().nullable().optional(),
    socialType: socialTypeSchema.nullable().optional(),
    socialImage: z.string().nullable().optional(),
    socialImageAlt: z.string().nullable().optional(),
    id: z.string().uuid()
});

export type GetSeoAdditionDto = z.infer<typeof getSeoAdditionDtoSchema>;

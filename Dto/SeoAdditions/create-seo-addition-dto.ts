/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { socialTypeSchema } from "./social-type";import { z } from 'zod';

export const createSeoAdditionDtoSchema = z.object({
    slug: z.string().length(128),
    title: z.string().length(128),
    description: z.string().length(278),
    image: z.string().length(128).nullable().optional(),
    imageAlt: z.string().length(256).nullable().optional(),
    socialTitle: z.string().length(128).nullable().optional(),
    socialType: socialTypeSchema.nullable().optional(),
    socialImage: z.string().length(128).nullable().optional(),
    socialImageAlt: z.string().length(256).nullable().optional()
});

export type CreateSeoAdditionDto = z.infer<typeof createSeoAdditionDtoSchema>;

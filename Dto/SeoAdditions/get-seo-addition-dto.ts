/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { socialTypeSchema } from "./social-type";import { z } from 'zod';

export const getSeoAdditionDtoSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().nullish(),
    imageAlt: z.string().nullish(),
    socialTitle: z.string().nullish(),
    socialType: socialTypeSchema.nullish(),
    socialImage: z.string().nullish(),
    socialImageAlt: z.string().nullish(),
    id: z.string().uuid()
});

export type GetSeoAdditionDto = z.infer<typeof getSeoAdditionDtoSchema>;

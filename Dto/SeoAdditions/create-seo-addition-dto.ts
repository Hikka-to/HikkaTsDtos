/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { SocialType, socialTypeSchema } from "./social-type";
import { z } from 'zod';

export const createSeoAdditionDtoSchema = z.object({
    slug: z.string().max(128).default(''),
    title: z.string().max(128).default(''),
    description: z.string().max(278).default(''),
    image: z.string().max(128).nullish().default(''),
    imageAlt: z.string().max(256).nullish().default(''),
    socialTitle: z.string().max(128).nullish().default(''),
    socialType: socialTypeSchema.nullish().default(SocialType.Article),
    socialImage: z.string().max(128).nullish().default(''),
    socialImageAlt: z.string().max(256).nullish().default('')
});

export type CreateSeoAdditionDto = z.infer<typeof createSeoAdditionDtoSchema>;

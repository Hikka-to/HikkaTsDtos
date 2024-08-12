/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { SocialType, socialTypeSchema } from "./social-type";import { z } from 'zod';

export interface CreateSeoAdditionDto {
    slug: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    socialTitle: string;
    socialType: SocialType;
    socialImage: string;
    socialImageAlt: string;
}

export const createSeoAdditionDtoSchema = z.object({
    slug: z.string().length(128),
    title: z.string().length(128),
    description: z.string().length(278),
    image: z.string().length(128).nullable(),
    imageAlt: z.string().length(256).nullable(),
    socialTitle: z.string().length(128).nullable(),
    socialType: socialTypeSchema.nullable(),
    socialImage: z.string().length(128).nullable(),
    socialImageAlt: z.string().length(256).nullable()
});

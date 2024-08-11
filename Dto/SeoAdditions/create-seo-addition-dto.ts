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

export const createSeoAdditionDtoProperties: (keyof CreateSeoAdditionDto)[] = [
    'slug',
    'title',
    'description',
    'image',
    'imageAlt',
    'socialTitle',
    'socialType',
    'socialImage',
    'socialImageAlt'
];

export const createSeoAdditionDtoSchema = z.object({
    slug: z.string().length(128),
    title: z.string().length(128),
    description: z.string().length(278),
    image: z.string().nullable().length(128),
    imageAlt: z.string().nullable().length(256),
    socialTitle: z.string().nullable().length(128),
    socialType: socialTypeSchema.nullable(),
    socialImage: z.string().nullable().length(128),
    socialImageAlt: z.string().nullable().length(256)
});

/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../Shared/model-dto";
import { SocialType, socialTypeSchema } from "./social-type";import { z } from 'zod';

export interface GetSeoAdditionDto extends ModelDto {
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

export const getSeoAdditionDtoProperties: (keyof GetSeoAdditionDto)[] = [
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

export const getSeoAdditionDtoSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().nullable(),
    imageAlt: z.string().nullable(),
    socialTitle: z.string().nullable(),
    socialType: socialTypeSchema.nullable(),
    socialImage: z.string().nullable(),
    socialImageAlt: z.string().nullable(),
    id: z.string().uuid().regex(/\S/)
});

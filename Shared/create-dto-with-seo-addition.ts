/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../Dto/SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createDtoWithSeoAdditionSchema = z.object({ 'seoAddition': createSeoAdditionDtoSchema });

export type CreateDtoWithSeoAddition = z.infer<typeof createDtoWithSeoAdditionSchema>;

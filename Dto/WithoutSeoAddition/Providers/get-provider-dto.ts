/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getAnimeDtoSchema } from '../../WithSeoAddition/Animes/get-anime-dto';
import { z } from 'zod';

export const getProviderDtoSchema = z.object({
	'anime': getAnimeDtoSchema,
	'logoPath': z.string(),
	'name': z.string(),
	'priority': z.number().int(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetProviderDto = z.infer<typeof getProviderDtoSchema>;

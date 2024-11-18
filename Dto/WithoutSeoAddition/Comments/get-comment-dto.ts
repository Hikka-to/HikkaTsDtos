/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getUserDtoSchema } from '../../Users/get-user-dto';
import { z } from 'zod';

export const getCommentDtoSchema = z.object({
	'body': z.string(),
	'user': getUserDtoSchema,
	'parentId': z.string().uuid(),
	'createdAt': z.date(),
	'updatedAt': z.date(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetCommentDto = z.infer<typeof getCommentDtoSchema>;

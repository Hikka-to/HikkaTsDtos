/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createAnimeVideoKindDtoSchema = z.object({ 'name': z.string().max(156) });

export type CreateAnimeVideoKindDto = z.infer<typeof createAnimeVideoKindDtoSchema>;

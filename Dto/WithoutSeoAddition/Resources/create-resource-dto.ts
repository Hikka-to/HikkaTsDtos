/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createResourceDtoSchema = z.object({ 'slug': z.string().max(128) });

export type CreateResourceDto = z.infer<typeof createResourceDtoSchema>;

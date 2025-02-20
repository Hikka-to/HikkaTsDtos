/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export enum SortOrder {
    Asc = 0,
    Desc = 1,
}

export const sortOrderSchema = z.nativeEnum(SortOrder);

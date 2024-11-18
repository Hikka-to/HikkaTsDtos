/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export enum FilterType {
    Strict = 0,
    Like = 1,
    InsensitiveLike = 2,
    Contains = 3,
    InsensitiveContains = 4,
    StartsWith = 5,
    EndsWith = 6,
    InsensitiveStartsWith = 7,
    InsensitiveEndsWith = 8,
    Bigger = 9,
    Smaller = 10,
    BiggerOrEqual = 11,
    SmallerOrEqual = 12,
    WebSearch = 13,
    OrderedWebSearch = 14,
    DescendingOrderedWebSearch = 15,
}

export const filterTypeSchema = z.nativeEnum(FilterType);

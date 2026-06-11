/** Upper bound for config path array indexes to reject impractical sparse writes. */
export declare const MAX_CONFIG_PATH_ARRAY_INDEX = 100000;
/** Parses a canonical non-negative array index segment used by config and JSON paths. */
export declare function parseConfigPathArrayIndex(segment: string): number | undefined;

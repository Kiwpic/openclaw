/** List legacy tools.web.x_search auth config paths present in raw config. */
export declare function listLegacyXSearchConfigPaths(raw: unknown): string[];
/** Move legacy X search API key config into plugins.entries.xai.config.webSearch. */
export declare function migrateLegacyXSearchConfig<T>(raw: T): {
    config: T;
    changes: string[];
};

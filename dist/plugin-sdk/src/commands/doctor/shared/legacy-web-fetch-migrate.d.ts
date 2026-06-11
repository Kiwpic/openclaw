/** List legacy tools.web.fetch.firecrawl config paths present in raw config. */
export declare function listLegacyWebFetchConfigPaths(raw: unknown): string[];
/** Move legacy Firecrawl web-fetch config into plugins.entries.firecrawl.config.webFetch. */
export declare function migrateLegacyWebFetchConfig<T>(raw: T): {
    config: T;
    changes: string[];
};

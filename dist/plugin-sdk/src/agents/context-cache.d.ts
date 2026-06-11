/** Process-local model context window cache keyed by model id. */
export declare const MODEL_CONTEXT_TOKEN_CACHE: Map<string, number>;
/** Looks up cached context-token count for a model id. */
export declare function lookupCachedContextTokens(modelId?: string): number | undefined;

type CollectProviderApiKeysOptions = {
    env?: NodeJS.ProcessEnv;
    providerEnvVars?: readonly string[];
};
/** Collect configured API keys for live provider tests without exposing values. */
export declare function collectProviderApiKeys(provider: string, options?: CollectProviderApiKeysOptions): string[];
/** Collect Anthropic API keys for live cache/model tests. */
export declare function collectAnthropicApiKeys(): string[];
/** Collect Gemini API keys for live cache/model tests. */
export declare function collectGeminiApiKeys(): string[];
/** Return whether a provider error message indicates API-key rate limiting. */
export declare function isApiKeyRateLimitError(message: string): boolean;
/** Return whether an Anthropic error message indicates rate limiting. */
export declare function isAnthropicRateLimitError(message: string): boolean;
/** Return whether an Anthropic error message indicates billing exhaustion. */
export declare function isAnthropicBillingError(message: string): boolean;
export {};

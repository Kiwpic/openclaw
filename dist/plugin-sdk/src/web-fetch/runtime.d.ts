import type { OpenClawConfig } from "../config/types.js";
import type { PluginWebFetchProviderEntry, WebFetchProviderToolDefinition } from "../plugins/types.js";
import type { RuntimeWebFetchMetadata } from "../secrets/runtime-web-tools.types.js";
type WebFetchConfig = NonNullable<OpenClawConfig["tools"]>["web"] extends infer Web ? Web extends {
    fetch?: infer Fetch;
} ? Fetch : undefined : undefined;
export type ResolveWebFetchDefinitionParams = {
    config?: OpenClawConfig;
    sandboxed?: boolean;
    runtimeWebFetch?: RuntimeWebFetchMetadata;
    providerId?: string;
    preferRuntimeProviders?: boolean;
};
/** Resolves whether web_fetch is enabled for the current config/sandbox. */
export declare function resolveWebFetchEnabled(params: {
    fetch?: WebFetchConfig;
    sandboxed?: boolean;
}): boolean;
/** Reports whether a web_fetch provider has usable credentials. */
export declare function isWebFetchProviderConfigured(params: {
    provider: Pick<PluginWebFetchProviderEntry, "envVars" | "getConfiguredCredentialFallback" | "getConfiguredCredentialValue" | "getCredentialValue" | "requiresCredential">;
    config?: OpenClawConfig;
}): boolean;
/** Lists web_fetch providers available to runtime selection. */
export declare function listWebFetchProviders(params?: {
    config?: OpenClawConfig;
}): PluginWebFetchProviderEntry[];
/** Lists plugin-configured web_fetch providers. */
export declare function listConfiguredWebFetchProviders(params?: {
    config?: OpenClawConfig;
}): PluginWebFetchProviderEntry[];
/** Resolves the configured or auto-detected web_fetch provider id. */
export declare function resolveWebFetchProviderId(params: {
    fetch?: WebFetchConfig;
    config?: OpenClawConfig;
    providers?: PluginWebFetchProviderEntry[];
}): string;
/** Resolves the executable web_fetch provider tool definition. */
export declare function resolveWebFetchDefinition(options?: ResolveWebFetchDefinitionParams): {
    provider: PluginWebFetchProviderEntry;
    definition: WebFetchProviderToolDefinition;
} | null;
export {};

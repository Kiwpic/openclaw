import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { PluginWebSearchProviderEntry, WebSearchProviderToolDefinition } from "../plugins/types.js";
import type { RuntimeWebSearchMetadata } from "../secrets/runtime-web-tools.types.js";
import type { ResolveWebSearchDefinitionParams, RunWebSearchParams, RunWebSearchResult, RuntimeWebSearchConfig as WebSearchConfig } from "./runtime-types.js";
export type { ListWebSearchProvidersParams, ResolveWebSearchDefinitionParams, RunWebSearchParams, RunWebSearchResult, RuntimeWebSearchConfig, RuntimeWebSearchProviderEntry, RuntimeWebSearchToolDefinition, } from "./runtime-types.js";
declare function resolveSearchConfig(cfg?: OpenClawConfig): WebSearchConfig;
/** Resolves whether web_search is enabled for the current config/sandbox. */
export declare function resolveWebSearchEnabled(params: {
    search?: WebSearchConfig;
    sandboxed?: boolean;
}): boolean;
/** Reports whether a web_search provider has usable configured credentials. */
export declare function isWebSearchProviderConfigured(params: {
    provider: Pick<PluginWebSearchProviderEntry, "credentialPath" | "id" | "authProviderId" | "envVars" | "getConfiguredCredentialValue" | "getConfiguredCredentialFallback" | "getCredentialValue" | "requiresCredential">;
    config?: OpenClawConfig;
}): boolean;
/** Lists runtime web_search providers after applying runtime config snapshots. */
export declare function listWebSearchProviders(params?: {
    config?: OpenClawConfig;
}): PluginWebSearchProviderEntry[];
/** Lists plugin-configured web_search providers without runtime-only providers. */
export declare function listConfiguredWebSearchProviders(params?: {
    config?: OpenClawConfig;
}): PluginWebSearchProviderEntry[];
/** Resolves configured or auto-detected web_search provider id. */
export declare function resolveWebSearchProviderId(params: {
    search?: WebSearchConfig;
    config?: OpenClawConfig;
    agentDir?: string;
    providers?: PluginWebSearchProviderEntry[];
}): string;
declare function resolveExplicitWebSearchProviderId(params: {
    search?: WebSearchConfig;
    runtimeWebSearch?: RuntimeWebSearchMetadata;
    providerId?: string;
    includeRuntimeSelection?: boolean;
}): string | undefined;
declare function resolveExplicitWebSearchProviderPluginIds(params: {
    config?: OpenClawConfig;
    search?: WebSearchConfig;
    runtimeWebSearch?: RuntimeWebSearchMetadata;
    providerId?: string;
    includeRuntimeSelection?: boolean;
}): readonly string[] | undefined;
/** Resolves the executable web_search provider tool definition. */
export declare function resolveWebSearchDefinition(options?: ResolveWebSearchDefinitionParams): {
    provider: PluginWebSearchProviderEntry;
    definition: WebSearchProviderToolDefinition;
} | null;
declare function resolveWebSearchCandidates(options?: ResolveWebSearchDefinitionParams): PluginWebSearchProviderEntry[];
declare function hasExplicitWebSearchSelection(params: {
    search?: WebSearchConfig;
    runtimeWebSearch?: RuntimeWebSearchMetadata;
    providerId?: string;
    providers?: PluginWebSearchProviderEntry[];
}): boolean;
/** Executes web_search with fallback when selection was not explicit. */
export declare function runWebSearch(params: RunWebSearchParams): Promise<RunWebSearchResult>;
export declare const testing: {
    resolveSearchConfig: typeof resolveSearchConfig;
    resolveSearchProvider: typeof resolveWebSearchProviderId;
    resolveWebSearchProviderId: typeof resolveWebSearchProviderId;
    resolveWebSearchCandidates: typeof resolveWebSearchCandidates;
    resolveExplicitWebSearchProviderId: typeof resolveExplicitWebSearchProviderId;
    resolveExplicitWebSearchProviderPluginIds: typeof resolveExplicitWebSearchProviderPluginIds;
    hasExplicitWebSearchSelection: typeof hasExplicitWebSearchSelection;
};
export { testing as __testing };

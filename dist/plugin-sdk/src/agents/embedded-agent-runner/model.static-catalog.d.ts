import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { ProviderRuntimeModel } from "../../plugins/provider-runtime-model.types.js";
/** Resolves a provider alias from plugin model-catalog metadata when the alias is unambiguous. */
export declare function canonicalizeManifestModelCatalogProviderAlias(params: {
    provider: string;
    cfg?: OpenClawConfig;
    workspaceDir?: string;
    env?: NodeJS.ProcessEnv;
}): string;
/** Returns whether a bundled static catalog asks runtime discovery to augment its rows. */
export declare function bundledStaticCatalogProviderUsesRuntimeAugment(params: {
    provider: string;
    env?: NodeJS.ProcessEnv;
}): boolean;
/** Resolves one bundled static-catalog model row for provider/model lookup. */
export declare function resolveBundledStaticCatalogModel(params: {
    provider: string;
    modelId: string;
    cfg?: OpenClawConfig;
    workspaceDir?: string;
    env?: NodeJS.ProcessEnv;
    includeRuntimeDiscovery?: boolean;
}): ProviderRuntimeModel | undefined;

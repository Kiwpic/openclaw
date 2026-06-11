import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderRuntimePluginHandle } from "../plugins/provider-hook-runtime.js";
import type { ProviderRuntimeModel } from "../plugins/provider-runtime-model.types.js";
/**
 * Resolves whether a provider should emit reasoning via native fields or tagged text,
 * using provider runtime hooks when available and defaulting to native output.
 */
export declare function resolveReasoningOutputMode(params: {
    provider: string | undefined | null;
    config?: OpenClawConfig;
    workspaceDir?: string;
    env?: NodeJS.ProcessEnv;
    modelId?: string;
    modelApi?: string | null;
    model?: ProviderRuntimeModel;
    runtimeHandle?: ProviderRuntimePluginHandle;
}): "native" | "tagged";
/**
 * Returns true if the provider requires reasoning to be wrapped in tags
 * (e.g. <think> and <final>) in the text stream, rather than using native
 * API fields for reasoning/thinking.
 */
export declare function isReasoningTagProvider(provider: string | undefined | null, options?: {
    config?: OpenClawConfig;
    workspaceDir?: string;
    env?: NodeJS.ProcessEnv;
    modelId?: string;
    modelApi?: string | null;
    model?: ProviderRuntimeModel;
    runtimeHandle?: ProviderRuntimePluginHandle;
}): boolean;

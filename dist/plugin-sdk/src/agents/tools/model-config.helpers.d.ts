import type { AgentToolModelConfig } from "../../config/types.agents-shared.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { AuthProfileCredential, AuthProfileStore } from "../auth-profiles/types.js";
export type ToolModelConfig = {
    primary?: string;
    fallbacks?: string[];
    timeoutMs?: number;
};
/** Returns whether a tool model config contains a primary or fallback model ref. */
export declare function hasToolModelConfig(model: ToolModelConfig | undefined): boolean;
/** Resolves the configured default model ref, falling back to OpenClaw defaults. */
export declare function resolveDefaultModelRef(cfg?: OpenClawConfig): {
    provider: string;
    model: string;
};
/** Returns whether a provider has env, profile, or external CLI auth available. */
export declare function hasAuthForProvider(params: {
    provider: string;
    agentDir?: string;
    authStore?: AuthProfileStore;
}): boolean;
/** Returns whether an auth profile exists for a provider, optionally filtered by type. */
export declare function hasAuthProfileForProvider(params: {
    provider: string;
    agentDir?: string;
    authStore?: AuthProfileStore;
    includeExternalCli?: boolean;
    type?: AuthProfileCredential["type"];
}): boolean;
/** Returns whether a provider can be used by a model-backed tool. */
export declare function hasProviderAuthForTool(params: {
    provider: string;
    cfg?: OpenClawConfig;
    workspaceDir?: string;
    agentDir?: string;
    authStore?: AuthProfileStore;
}): boolean;
/** Normalizes agent tool model config into a compact runtime shape. */
export declare function coerceToolModelConfig(model?: AgentToolModelConfig): ToolModelConfig;
/** Builds a tool model config from configured auth-aware candidate model refs. */
export declare function buildToolModelConfigFromCandidates(params: {
    explicit: ToolModelConfig;
    cfg?: OpenClawConfig;
    workspaceDir?: string;
    agentDir?: string;
    authStore?: AuthProfileStore;
    candidates: Array<string | null | undefined>;
    isProviderConfigured?: (provider: string) => boolean;
}): ToolModelConfig | null;

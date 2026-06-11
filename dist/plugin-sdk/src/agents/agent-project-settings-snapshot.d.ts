import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { BundleMcpServerConfig } from "../plugins/bundle-mcp.js";
import { type PluginMetadataSnapshot } from "../plugins/plugin-metadata-snapshot.js";
import type { SettingsManager } from "./sessions/index.js";
export declare const DEFAULT_EMBEDDED_AGENT_PROJECT_SETTINGS_POLICY = "sanitize";
/** Policy for whether workspace project settings can influence embedded-agent behavior. */
export type EmbeddedAgentProjectSettingsPolicy = "trusted" | "sanitize" | "ignore";
/** Merged settings snapshot consumed by embedded agent settings managers. */
export type AgentSettingsSnapshot = ReturnType<SettingsManager["getGlobalSettings"]> & {
    mcpServers?: Record<string, BundleMcpServerConfig>;
};
/**
 * Load and merge settings contributed by enabled bundle plugins for one
 * embedded-agent workspace.
 */
export declare function loadEnabledBundleAgentSettingsSnapshot(params: {
    cwd: string;
    cfg?: OpenClawConfig;
    env?: NodeJS.ProcessEnv;
    pluginMetadataSnapshot?: PluginMetadataSnapshot;
}): AgentSettingsSnapshot;
/** Resolve how project-local embedded-agent settings should be applied. */
/** Resolves the configured project-settings trust policy for embedded agents. */
export declare function resolveEmbeddedAgentProjectSettingsPolicy(cfg?: OpenClawConfig): EmbeddedAgentProjectSettingsPolicy;
/** Build the final embedded-agent settings snapshot in merge-precedence order. */
/** Merges global, plugin, and project settings according to the selected trust policy. */
export declare function buildEmbeddedAgentSettingsSnapshot(params: {
    globalSettings: AgentSettingsSnapshot;
    pluginSettings?: AgentSettingsSnapshot;
    projectSettings: AgentSettingsSnapshot;
    policy: EmbeddedAgentProjectSettingsPolicy;
}): AgentSettingsSnapshot;

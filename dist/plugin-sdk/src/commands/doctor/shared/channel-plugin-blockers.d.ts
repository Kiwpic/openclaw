import type { OpenClawConfig } from "../../../config/types.openclaw.js";
export type ChannelPluginBlockerHit = {
    /** Normalized configured channel id whose backing plugin is unavailable. */
    channelId: string;
    /** Plugin id that would provide the configured channel. */
    pluginId: string;
    /** Effective activation reason preventing the plugin from loading. */
    reason: "disabled in config" | "plugins disabled";
};
/** Find configured channel ids whose backing plugins are explicitly disabled. */
export declare function scanConfiguredChannelPluginBlockers(cfg: OpenClawConfig, env?: NodeJS.ProcessEnv): ChannelPluginBlockerHit[];
/** Format doctor warnings for configured channels blocked by plugin activation state. */
export declare function collectConfiguredChannelPluginBlockerWarnings(hits: ChannelPluginBlockerHit[]): string[];
/** Return true when a setup warning targets a channel already explained by plugin blockers. */
export declare function isWarningBlockedByChannelPlugin(warning: string, hits: ChannelPluginBlockerHit[]): boolean;

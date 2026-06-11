import type { OpenClawConfig } from "../config/types.openclaw.js";
/** Result of enabling a plugin in config. */
export type PluginEnableResult = {
    config: OpenClawConfig;
    enabled: boolean;
    pluginId: string;
    reason?: string;
};
/** Enables a plugin in config unless global, denylist, or allowlist policy blocks it. */
export declare function enablePluginInConfig(cfg: OpenClawConfig, pluginId: string, options?: {
    updateChannelConfig?: boolean;
}): PluginEnableResult;

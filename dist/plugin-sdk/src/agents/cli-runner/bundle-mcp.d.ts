import type { CliBackendConfig } from "../../config/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { type BundleMcpConfig } from "../../plugins/bundle-mcp.js";
import type { CliBundleMcpMode } from "../../plugins/types.js";
type PreparedCliBundleMcpConfig = {
    backend: CliBackendConfig;
    cleanup?: () => Promise<void>;
    mcpConfigHash?: string;
    mcpResumeHash?: string;
    env?: Record<string, string>;
};
/** Prepare backend args/env/cleanup for bundle MCP injection into a CLI run. */
export declare function prepareCliBundleMcpConfig(params: {
    enabled: boolean;
    mode?: CliBundleMcpMode;
    backend: CliBackendConfig;
    workspaceDir: string;
    config?: OpenClawConfig;
    additionalConfig?: BundleMcpConfig;
    env?: Record<string, string>;
    warn?: (message: string) => void;
}): Promise<PreparedCliBundleMcpConfig>;
export {};

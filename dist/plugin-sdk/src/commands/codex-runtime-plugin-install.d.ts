import type { OpenClawConfig } from "../config/types.openclaw.js";
import { type RuntimePluginInstallResult } from "./runtime-plugin-install.js";
export declare const CODEX_RUNTIME_PLUGIN_ID = "codex";
export type CodexRuntimePluginInstallResult = RuntimePluginInstallResult;
/** Return true when a selected model requires the Codex runtime plugin to be installed. */
export declare function selectedModelShouldEnsureCodexRuntimePlugin(params: {
    cfg: OpenClawConfig;
    model?: string;
}): boolean;
export declare const ensureCodexRuntimePluginForModelSelection: (params: import("./runtime-plugin-install.js").RuntimePluginEnsureParams) => Promise<RuntimePluginInstallResult>;
export declare const repairCodexRuntimePluginInstallForModelSelection: (params: import("./runtime-plugin-install.js").RuntimePluginRepairParams) => Promise<{
    required: boolean;
    changes: string[];
    warnings: string[];
}>;

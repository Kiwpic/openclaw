import type { OpenClawConfig } from "../config/types.openclaw.js";
import { type RuntimePluginInstallResult } from "./runtime-plugin-install.js";
export declare const COPILOT_RUNTIME_PLUGIN_ID = "copilot";
export type CopilotRuntimePluginInstallResult = RuntimePluginInstallResult;
/** Return true when a selected model requires the Copilot runtime plugin to be installed. */
export declare function selectedModelShouldEnsureCopilotRuntimePlugin(params: {
    cfg: OpenClawConfig;
    model?: string;
}): boolean;
export declare const ensureCopilotRuntimePluginForModelSelection: (params: import("./runtime-plugin-install.js").RuntimePluginEnsureParams) => Promise<RuntimePluginInstallResult>;
export declare const repairCopilotRuntimePluginInstallForModelSelection: (params: import("./runtime-plugin-install.js").RuntimePluginRepairParams) => Promise<{
    required: boolean;
    changes: string[];
    warnings: string[];
}>;

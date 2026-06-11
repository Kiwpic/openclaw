import type { BundleMcpConfig } from "../../plugins/bundle-mcp.js";
/** Writes merged Gemini system settings and returns env plus cleanup hook. */
export declare function writeGeminiSystemSettings(mergedConfig: BundleMcpConfig, inheritedEnv: Record<string, string> | undefined): Promise<{
    env: Record<string, string>;
    cleanup: () => Promise<void>;
}>;

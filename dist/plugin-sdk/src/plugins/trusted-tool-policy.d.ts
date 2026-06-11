import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { PluginHookBeforeToolCallEvent, PluginHookBeforeToolCallResult, PluginHookToolContext } from "./hook-types.js";
/** Diagnostic entry for an installed trusted tool policy. */
export type TrustedToolPolicyDiagnosticEntry = {
    id: string;
    pluginId: string;
    pluginName?: string;
};
/** True when the active plugin registry has trusted tool policies. */
export declare function hasTrustedToolPolicies(): boolean;
/** Lists trusted tool policies for status and diagnostics. */
export declare function getTrustedToolPolicyDiagnosticEntries(): TrustedToolPolicyDiagnosticEntry[];
/** Runs trusted tool policies before a tool call and returns the first terminal decision. */
export declare function runTrustedToolPolicies(event: PluginHookBeforeToolCallEvent, ctx: PluginHookToolContext, options?: {
    config?: OpenClawConfig;
    deriveEvent?: (params: Record<string, unknown>) => Pick<PluginHookBeforeToolCallEvent, "derivedPaths">;
    normalizeEvent?: (event: PluginHookBeforeToolCallEvent, ctx: PluginHookToolContext) => {
        params?: Record<string, unknown>;
        event?: Pick<PluginHookBeforeToolCallEvent, "toolKind" | "toolInputKind">;
        ctx?: Pick<PluginHookToolContext, "toolKind" | "toolInputKind">;
    } | undefined;
}): Promise<PluginHookBeforeToolCallResult | undefined>;

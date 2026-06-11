/**
 * Resolves bootstrap context targets for one embedded-agent attempt.
 */
import type { BootstrapMode } from "../../bootstrap-mode.js";
import { type WorkspaceBootstrapFile } from "../../workspace.js";
/** Inputs that decide whether this attempt should inject workspace bootstrap context. */
export type AttemptBootstrapRoutingInput = {
    workspaceBootstrapPending: boolean;
    bootstrapContextRunKind?: "default" | "heartbeat" | "cron";
    trigger?: string;
    sessionKey?: string;
    isPrimaryRun: boolean;
    isCanonicalWorkspace?: boolean;
    effectiveWorkspace: string;
    resolvedWorkspace: string;
    hasBootstrapFileAccess: boolean;
};
/** Bootstrap placement decision consumed by system/runtime context assembly. */
export type AttemptBootstrapRouting = {
    bootstrapMode: BootstrapMode;
    includeBootstrapInSystemContext: boolean;
    includeBootstrapInRuntimeContext: boolean;
};
export type AttemptWorkspaceBootstrapRoutingInput = Omit<AttemptBootstrapRoutingInput, "workspaceBootstrapPending"> & {
    isWorkspaceBootstrapPending: (workspaceDir: string) => Promise<boolean>;
    bootstrapFiles?: readonly WorkspaceBootstrapFile[];
};
/**
 * Maps a resolved bootstrap mode to concrete prompt destinations. Today only
 * full bootstrap enters system context; limited/none intentionally avoid
 * runtime-context injection until that path has a separate contract.
 */
export declare function resolveBootstrapContextTargets(params: {
    bootstrapMode: BootstrapMode;
}): Pick<AttemptBootstrapRouting, "includeBootstrapInSystemContext" | "includeBootstrapInRuntimeContext">;
export declare function hasBootstrapFileContent(files?: readonly WorkspaceBootstrapFile[]): boolean;
/**
 * Resolves workspace bootstrap routing after checking pending state and
 * hook-provided bootstrap files. Hook content counts as both pending bootstrap
 * and file access so generated bootstrap text follows the same route as disk
 * bootstrap content.
 */
export declare function resolveAttemptWorkspaceBootstrapRouting(params: AttemptWorkspaceBootstrapRoutingInput): Promise<AttemptBootstrapRouting>;

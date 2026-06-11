import type { SessionHeader } from "../agents/sessions/session-manager.js";
import type { TrajectoryBundleManifest, TrajectoryEvent, TrajectoryToolDefinition } from "./types.js";
type BuildTrajectoryBundleParams = {
    outputDir: string;
    sessionFile: string;
    sessionId: string;
    sessionKey?: string;
    workspaceDir: string;
    runtimeFile?: string;
    systemPrompt?: string;
    tools?: TrajectoryToolDefinition[];
    maxTotalEvents?: number;
};
export declare function resolveDefaultTrajectoryExportDir(params: {
    workspaceDir: string;
    sessionId: string;
    now?: Date;
}): string;
export declare function exportTrajectoryBundle(params: BuildTrajectoryBundleParams): Promise<{
    manifest: TrajectoryBundleManifest;
    outputDir: string;
    events: TrajectoryEvent[];
    header: SessionHeader | null;
    runtimeFile?: string;
    supplementalFiles: string[];
}>;
export {};

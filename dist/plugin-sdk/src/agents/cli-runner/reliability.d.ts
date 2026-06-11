import type { CliBackendConfig } from "../../config/types.js";
import type { EmbeddedRunTrigger } from "../embedded-agent-runner/run/params.js";
/** Resolves the no-output watchdog timeout for a fresh or resumed CLI run. */
export declare function resolveCliNoOutputTimeoutMs(params: {
    backend: CliBackendConfig;
    timeoutMs: number;
    useResume: boolean;
    trigger?: EmbeddedRunTrigger;
}): number;
/** Builds a supervisor scope key for session-owned CLI processes. */
export declare function buildCliSupervisorScopeKey(params: {
    backend: CliBackendConfig;
    backendId: string;
    cliSessionId?: string;
}): string | undefined;

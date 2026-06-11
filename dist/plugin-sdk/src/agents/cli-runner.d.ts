import type { PreparedCliRunContext, RunCliAgentParams } from "./cli-runner/types.js";
import { claudeCliSessionTranscriptHasContent as claudeCliSessionTranscriptHasContentImpl } from "./command/attempt-execution.helpers.js";
import type { EmbeddedAgentRunResult } from "./embedded-agent-runner.js";
declare const cliRunnerDeps: {
    claudeCliSessionTranscriptHasContent: typeof claudeCliSessionTranscriptHasContentImpl;
    delay: (delayMs: number) => Promise<void>;
};
/** Overrides top-level CLI runner dependencies for tests. */
export declare function setCliRunnerTestDeps(overrides: Partial<typeof cliRunnerDeps>): void;
/** Restores default top-level CLI runner dependencies after tests. */
export declare function restoreCliRunnerTestDeps(): void;
/** Checks whether a Claude CLI session binding has reached its transcript file. */
export declare function isCliBindingFlushed(sessionId: string | undefined, provider: string | undefined, workspaceDir?: string): Promise<boolean>;
/** Prepares and runs one CLI-backed agent turn. */
export declare function runCliAgent(params: RunCliAgentParams): Promise<EmbeddedAgentRunResult>;
/** Runs an already-prepared CLI agent context through hooks and execution. */
export declare function runPreparedCliAgent(context: PreparedCliRunContext): Promise<EmbeddedAgentRunResult>;
/** Legacy Claude-specific wrapper params for the generic CLI runner. */
export type RunClaudeCliAgentParams = Omit<RunCliAgentParams, "provider" | "cliSessionId"> & {
    provider?: string;
    claudeSessionId?: string;
};
/** Converts legacy Claude CLI wrapper params into generic CLI runner params. */
export declare function buildRunClaudeCliAgentParams(params: RunClaudeCliAgentParams): RunCliAgentParams;
/** Runs the legacy Claude CLI wrapper through the generic CLI runner. */
export declare function runClaudeCliAgent(params: RunClaudeCliAgentParams): Promise<EmbeddedAgentRunResult>;
export {};

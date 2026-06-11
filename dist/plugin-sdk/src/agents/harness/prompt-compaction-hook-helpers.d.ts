import type { AgentMessage } from "../runtime/index.js";
import { type AgentHarnessHookContext } from "./hook-context.js";
/** Prompt/developer-instruction pair after harness prompt-build hooks run. */
export type AgentHarnessPromptBuildResult = {
    prompt: string;
    developerInstructions: string;
};
/** Runs before-prompt hooks and returns the adjusted prompt fields. */
export declare function resolveAgentHarnessBeforePromptBuildResult(params: {
    prompt: string;
    developerInstructions: string;
    messages: unknown[];
    ctx: AgentHarnessHookContext;
}): Promise<AgentHarnessPromptBuildResult>;
/** Runs best-effort before-compaction hooks for a harness session. */
export declare function runAgentHarnessBeforeCompactionHook(params: {
    sessionFile: string;
    messages: AgentMessage[];
    ctx: AgentHarnessHookContext;
}): Promise<void>;
/** Runs best-effort after-compaction hooks for a harness session. */
export declare function runAgentHarnessAfterCompactionHook(params: {
    sessionFile: string;
    messages: AgentMessage[];
    ctx: AgentHarnessHookContext;
    compactedCount: number;
}): Promise<void>;

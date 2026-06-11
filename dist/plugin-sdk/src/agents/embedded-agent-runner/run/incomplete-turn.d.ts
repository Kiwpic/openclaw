import { SILENT_REPLY_TOKEN } from "../../../auto-reply/tokens.js";
import type { EmbeddedAgentExecutionContract } from "../../../config/types.agent-defaults.js";
import type { EmbeddedRunLivenessState } from "../types.js";
import type { EmbeddedRunAttemptResult } from "./types.js";
type ReplayMetadataAttempt = Pick<EmbeddedRunAttemptResult, "toolMetas" | "didSendViaMessagingTool" | "messagingToolSentTexts" | "messagingToolSentMediaUrls" | "successfulCronAdds"> & Partial<Pick<EmbeddedRunAttemptResult, "messagingToolSentTargets" | "acceptedSessionSpawns">>;
type IncompleteTurnAttempt = Pick<EmbeddedRunAttemptResult, "assistantTexts" | "clientToolCalls" | "currentAttemptAssistant" | "yieldDetected" | "didSendDeterministicApprovalPrompt" | "didSendViaMessagingTool" | "messagingToolSentTexts" | "messagingToolSentMediaUrls" | "messagingToolSentTargets" | "lastToolError" | "lastAssistant" | "itemLifecycle" | "replayMetadata" | "promptErrorSource" | "timedOutDuringCompaction" | "toolMetas"> & Partial<Pick<EmbeddedRunAttemptResult, "acceptedSessionSpawns">>;
type PlanningOnlyAttempt = Pick<EmbeddedRunAttemptResult, "assistantTexts" | "clientToolCalls" | "yieldDetected" | "didSendDeterministicApprovalPrompt" | "didSendViaMessagingTool" | "lastToolError" | "lastAssistant" | "itemLifecycle" | "replayMetadata" | "messagingToolSentTexts" | "messagingToolSentMediaUrls" | "messagingToolSentTargets" | "toolMetas">;
type SilentToolResultAttempt = Pick<EmbeddedRunAttemptResult, "clientToolCalls" | "yieldDetected" | "didSendDeterministicApprovalPrompt" | "lastToolError" | "messagesSnapshot" | "toolMetas">;
type RunLivenessAttempt = Pick<EmbeddedRunAttemptResult, "lastAssistant" | "promptErrorSource" | "replayMetadata" | "timedOutDuringCompaction">;
export declare function isIncompleteTerminalAssistantTurn(params: {
    hasAssistantVisibleText: boolean;
    lastAssistant?: {
        stopReason?: string;
    } | null;
}): boolean;
export declare const DEFAULT_REASONING_ONLY_RETRY_LIMIT = 2;
export declare const DEFAULT_EMPTY_RESPONSE_RETRY_LIMIT = 1;
export declare const PLANNING_ONLY_RETRY_INSTRUCTION = "The previous assistant turn only described the plan. Do not restate the plan. Act now: take the first concrete tool action you can. If a real blocker prevents action, reply with the exact blocker in one sentence.";
export declare const REASONING_ONLY_RETRY_INSTRUCTION = "The previous assistant turn recorded reasoning but did not produce a user-visible answer. Continue from that partial turn and produce the visible answer now. Do not restate the reasoning or restart from scratch.";
export declare const EMPTY_RESPONSE_RETRY_INSTRUCTION = "The previous attempt did not produce a user-visible answer. Continue from the current state and produce the visible answer now. Do not restart from scratch.";
export declare const ACK_EXECUTION_FAST_PATH_INSTRUCTION = "The latest user message is a short approval to proceed. Do not recap or restate the plan. Start with the first concrete tool action immediately. Keep any user-facing follow-up brief and natural.";
export declare const STRICT_AGENTIC_BLOCKED_TEXT = "Agent stopped after repeated plan-only turns without taking a concrete action. No concrete tool action or external side effect advanced the task.";
export type PlanningOnlyPlanDetails = {
    explanation: string;
    steps: string[];
};
/**
 * Marks whether retrying the attempt can safely replay the prompt. Mutating
 * tools, async work, committed delivery, spawned sessions, and cron writes all
 * count as side effects that make blind replay unsafe.
 */
export declare function buildAttemptReplayMetadata(params: ReplayMetadataAttempt): EmbeddedRunAttemptResult["replayMetadata"];
/** Falls back to replay-unsafe metadata when older attempt records lack replay details. */
export declare function resolveAttemptReplayMetadata(attempt: {
    replayMetadata?: EmbeddedRunAttemptResult["replayMetadata"] | null;
}): EmbeddedRunAttemptResult["replayMetadata"];
/**
 * Builds the user-visible incomplete-turn warning when a terminal attempt did
 * not produce a safe final assistant response and no committed delivery/progress
 * already completed the task.
 */
export declare function resolveIncompleteTurnPayloadText(params: {
    payloadCount: number;
    aborted: boolean;
    externalAbort: boolean;
    timedOut: boolean;
    attempt: IncompleteTurnAttempt;
}): string | null;
/**
 * Allows one retry when the provider returned no assistant turn at all and the
 * attempt has no side effects, active lifecycle items, delivery, or terminal
 * assistant/tool state.
 */
export declare function shouldRetryMissingAssistantTurn(params: {
    payloadCount: number;
    aborted: boolean;
    promptError?: unknown;
    timedOut: boolean;
    attempt: IncompleteTurnAttempt;
}): boolean;
/** Emits the silent-reply token for cron turns whose last successful tool result is silent. */
export declare function resolveSilentToolResultReplyPayload(params: {
    isCronTrigger: boolean;
    payloadCount: number;
    aborted: boolean;
    timedOut: boolean;
    attempt: SilentToolResultAttempt;
}): {
    text: typeof SILENT_REPLY_TOKEN;
} | null;
/**
 * Marks replay invalid whenever the recorded attempt might not be safe to
 * replay or the current run ended in a compaction/incomplete-turn state that
 * needs a fresh prompt boundary.
 */
export declare function resolveReplayInvalidFlag(params: {
    attempt: RunLivenessAttempt;
    incompleteTurnText?: string | null;
}): boolean;
/** Classifies the persisted run state used by session recovery and resume logic. */
export declare function resolveRunLivenessState(params: {
    payloadCount: number;
    aborted: boolean;
    timedOut: boolean;
    attempt: RunLivenessAttempt;
    incompleteTurnText?: string | null;
}): EmbeddedRunLivenessState;
/** Allows configured silent handling for replay-safe empty or reasoning-only assistant turns. */
export declare function shouldTreatEmptyAssistantReplyAsSilent(params: {
    allowEmptyAssistantReplyAsSilent?: boolean;
    payloadCount: number;
    aborted: boolean;
    timedOut: boolean;
    attempt: IncompleteTurnAttempt;
}): boolean;
/**
 * Builds the retry instruction for reasoning-only turns that consumed provider
 * output budget but produced no visible assistant text.
 */
export declare function resolveReasoningOnlyRetryInstruction(params: {
    provider?: string;
    modelId?: string;
    modelApi?: string;
    executionContract?: string;
    aborted: boolean;
    timedOut: boolean;
    attempt: IncompleteTurnAttempt;
}): string | null;
/**
 * Builds the retry instruction for empty assistant turns when the provider/model
 * is eligible for non-visible turn recovery.
 */
export declare function resolveEmptyResponseRetryInstruction(params: {
    provider?: string;
    modelId?: string;
    modelApi?: string;
    executionContract?: string;
    payloadCount: number;
    aborted: boolean;
    timedOut: boolean;
    attempt: IncompleteTurnAttempt;
}): string | null;
/** Detects short multilingual approval prompts that should continue execution immediately. */
export declare function isLikelyExecutionAckPrompt(text: string): boolean;
/** Builds the fast-path execution instruction for short approval prompts like "go ahead". */
export declare function resolveAckExecutionFastPathInstruction(params: {
    provider?: string;
    modelId?: string;
    prompt: string;
}): string | null;
/** Extracts the visible plan text and normalized step list from a plan-only reply. */
export declare function extractPlanningOnlyPlanDetails(text: string): PlanningOnlyPlanDetails | null;
/** Retry budget for plan-only recovery, higher for strict-agentic models. */
export declare function resolvePlanningOnlyRetryLimit(executionContract?: EmbeddedAgentExecutionContract): number;
/**
 * Builds the retry instruction for assistant turns that only promised a plan
 * instead of taking concrete action. The guard excludes real side effects,
 * non-actionable prompts, explicit completions, and multi-tool progress.
 */
export declare function resolvePlanningOnlyRetryInstruction(params: {
    provider?: string;
    modelId?: string;
    executionContract?: string;
    prompt?: string;
    aborted: boolean;
    timedOut: boolean;
    attempt: PlanningOnlyAttempt;
}): string | null;
export {};

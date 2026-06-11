import type { VerboseLevel } from "../auto-reply/thinking.js";
/** Stream name for agent events delivered to gateway listeners and plugin host hooks. */
export type AgentEventStream = "lifecycle" | "tool" | "assistant" | "error" | "item" | "plan" | "approval" | "command_output" | "patch" | "compaction" | "thinking" | (string & {});
/** Lifecycle phase for a visible item in the agent activity feed. */
export type AgentItemEventPhase = "start" | "update" | "end";
/** Status rendered for an item-level agent activity event. */
export type AgentItemEventStatus = "running" | "completed" | "failed" | "blocked";
/** Item category used by channels and Control UI to choose progress presentation. */
export type AgentItemEventKind = "tool" | "command" | "patch" | "search" | "analysis" | (string & {});
/** Payload for a single item shown in the agent activity stream. */
export type AgentItemEventData = {
    itemId: string;
    phase: AgentItemEventPhase;
    kind: AgentItemEventKind;
    title: string;
    status: AgentItemEventStatus;
    name?: string;
    meta?: string;
    toolCallId?: string;
    startedAt?: number;
    endedAt?: number;
    error?: string;
    summary?: string;
    progressText?: string;
    /** Preserve item telemetry while letting channel progress render a sibling tool event instead. */
    suppressChannelProgress?: boolean;
    approvalId?: string;
    approvalSlug?: string;
};
/** Plan update payload emitted when an agent publishes or revises its task list. */
export type AgentPlanEventData = {
    phase: "update";
    title: string;
    explanation?: string;
    steps?: string[];
    source?: string;
};
/** Approval event phase for request/resolution transitions. */
export type AgentApprovalEventPhase = "requested" | "resolved";
/** Approval status after routing, user action, or delivery failure. */
export type AgentApprovalEventStatus = "pending" | "unavailable" | "approved" | "denied" | "failed";
/** Approval family used by renderers and host hooks. */
export type AgentApprovalEventKind = "exec" | "plugin" | "unknown";
/** Payload for approval requests and their later resolution events. */
export type AgentApprovalEventData = {
    phase: AgentApprovalEventPhase;
    kind: AgentApprovalEventKind;
    status: AgentApprovalEventStatus;
    title: string;
    itemId?: string;
    toolCallId?: string;
    approvalId?: string;
    approvalSlug?: string;
    command?: string;
    host?: string;
    reason?: string;
    scope?: "turn" | "session";
    message?: string;
};
/** Incremental command output payload associated with an item/tool call. */
export type AgentCommandOutputEventData = {
    itemId: string;
    phase: "delta" | "end";
    title: string;
    toolCallId: string;
    name?: string;
    output?: string;
    status?: AgentItemEventStatus | "running";
    exitCode?: number | null;
    durationMs?: number;
    cwd?: string;
};
/** Patch summary payload emitted after an agent applies file changes. */
export type AgentPatchSummaryEventData = {
    itemId: string;
    phase: "end";
    title: string;
    toolCallId: string;
    name?: string;
    added: string[];
    modified: string[];
    deleted: string[];
    summary: string;
};
/** Enriched event delivered to subscribers after sequencing and context stamping. */
export type AgentEventPayload = {
    runId: string;
    seq: number;
    stream: AgentEventStream;
    ts: number;
    data: Record<string, unknown>;
    sessionKey?: string;
    /**
     * sessionId the run was bound to when it started. Lifecycle persistence uses
     * this to reject terminal events from a pre-`sessions.reset` run that would
     * otherwise clobber the rotated session row resolved by the shared sessionKey.
     */
    sessionId?: string;
    agentId?: string;
};
/** Per-run metadata used to stamp events and gate Control UI visibility. */
export type AgentRunContext = {
    sessionKey?: string;
    /** Owning run's sessionId; stamped onto lifecycle events (see AgentEventPayload.sessionId). */
    sessionId?: string;
    verboseLevel?: VerboseLevel;
    isHeartbeat?: boolean;
    /** Whether control UI clients should receive chat/agent updates for this run. */
    isControlUiVisible?: boolean;
    /** Timestamp when this context was first registered (for TTL-based cleanup). */
    registeredAt?: number;
    /** Timestamp of last activity (updated on every emitAgentEvent). */
    lastActiveAt?: number;
};
/** Registers or merges per-run context used by later agent event emissions. */
export declare function registerAgentRunContext(runId: string, context: AgentRunContext): void;
/** Returns the currently registered context for a run, if it has not been cleared or swept. */
export declare function getAgentRunContext(runId: string): AgentRunContext | undefined;
/** Clears context and sequence state for a run that has ended or been discarded. */
export declare function clearAgentRunContext(runId: string): void;
/**
 * Sweep stale run contexts that exceeded the given TTL.
 * Guards against orphaned entries when lifecycle "end"/"error" events are missed.
 */
export declare function sweepStaleRunContexts(maxAgeMs?: number): number;
/** Clears run context state without removing event listeners; test-only helper. */
export declare function resetAgentRunContextForTest(): void;
/** Emits an agent event after assigning per-run sequence, timestamp, and context metadata. */
export declare function emitAgentEvent(event: Omit<AgentEventPayload, "seq" | "ts">): void;
/** Emits an item activity event on the shared agent event bus. */
export declare function emitAgentItemEvent(params: {
    runId: string;
    data: AgentItemEventData;
    sessionKey?: string;
}): void;
/** Emits a plan update event on the shared agent event bus. */
export declare function emitAgentPlanEvent(params: {
    runId: string;
    data: AgentPlanEventData;
    sessionKey?: string;
}): void;
/** Emits an approval event on the shared agent event bus. */
export declare function emitAgentApprovalEvent(params: {
    runId: string;
    data: AgentApprovalEventData;
    sessionKey?: string;
}): void;
/** Emits command output for a running or completed item/tool call. */
export declare function emitAgentCommandOutputEvent(params: {
    runId: string;
    data: AgentCommandOutputEventData;
    sessionKey?: string;
}): void;
/** Emits a patch summary for a completed file-editing item/tool call. */
export declare function emitAgentPatchSummaryEvent(params: {
    runId: string;
    data: AgentPatchSummaryEventData;
    sessionKey?: string;
}): void;
/** Subscribes to sequenced agent events; returns an unsubscribe callback. */
export declare function onAgentEvent(listener: (evt: AgentEventPayload) => void): () => void;
/** Clears all agent event state, including listeners; test-only helper. */
export declare function resetAgentEventsForTest(): void;

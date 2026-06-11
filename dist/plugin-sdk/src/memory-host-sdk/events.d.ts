import type { MemoryDreamingPhaseName } from "./dreaming.js";
/** Workspace-relative JSONL audit log for memory recall, promotion, and dream events. */
export declare const MEMORY_HOST_EVENT_LOG_RELATIVE_PATH: string;
/** Event emitted when a recall query records the selected memory snippets. */
export type MemoryHostRecallRecordedEvent = {
    type: "memory.recall.recorded";
    timestamp: string;
    query: string;
    resultCount: number;
    results: Array<{
        path: string;
        startLine: number;
        endLine: number;
        score: number;
    }>;
};
/** Event emitted when deep-dream candidates are promoted into durable memory. */
export type MemoryHostPromotionAppliedEvent = {
    type: "memory.promotion.applied";
    timestamp: string;
    memoryPath: string;
    applied: number;
    candidates: Array<{
        key: string;
        path: string;
        startLine: number;
        endLine: number;
        score: number;
        recallCount: number;
    }>;
};
/** Event emitted after a dreaming phase writes inline memory and/or reports. */
export type MemoryHostDreamCompletedEvent = {
    type: "memory.dream.completed";
    timestamp: string;
    phase: MemoryDreamingPhaseName;
    inlinePath?: string;
    reportPath?: string;
    lineCount: number;
    storageMode: "inline" | "separate" | "both";
};
/** Append-only memory host event schema stored as JSONL. */
export type MemoryHostEvent = MemoryHostRecallRecordedEvent | MemoryHostPromotionAppliedEvent | MemoryHostDreamCompletedEvent;
/** Resolve the event log path inside a workspace without touching the filesystem. */
export declare function resolveMemoryHostEventLogPath(workspaceDir: string): string;
/** Append one memory host event, creating the dreams directory with symlink-safe writes. */
export declare function appendMemoryHostEvent(workspaceDir: string, event: MemoryHostEvent): Promise<void>;
/** Read recent memory host events, ignoring corrupt JSONL lines left by partial writes. */
export declare function readMemoryHostEvents(params: {
    workspaceDir: string;
    limit?: number;
}): Promise<MemoryHostEvent[]>;

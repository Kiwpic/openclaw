/**
 * Shared process-local state for active and abandoned embedded-agent runs.
 */
import type { SourceReplyDeliveryMode } from "../../auto-reply/get-reply-options.types.js";
/**
 * Shared process state for embedded-agent runs, queues, snapshots, and model-switch requests.
 *
 * The maps are global-singleton backed so reloads and lazy imports inside the same gateway process
 * do not split active-run bookkeeping.
 */
export type EmbeddedAgentQueueHandle = {
    kind?: "embedded";
    queueMessage: (text: string, options?: EmbeddedAgentQueueMessageOptions) => Promise<void>;
    isStreaming: () => boolean;
    isCompacting: () => boolean;
    supportsTranscriptCommitWait?: boolean;
    cancel?: (reason?: "user_abort" | "restart" | "superseded") => void;
    abort: () => void;
    sourceReplyDeliveryMode?: SourceReplyDeliveryMode;
};
export type EmbeddedAgentQueueMessageOptions = {
    steeringMode?: "all";
    debounceMs?: number;
    deliveryTimeoutMs?: number;
    waitForTranscriptCommit?: boolean;
    sourceReplyDeliveryMode?: SourceReplyDeliveryMode;
};
export type ActiveEmbeddedRunSnapshot = {
    transcriptLeafId: string | null;
    messages?: unknown[];
    inFlightPrompt?: string;
};
export type EmbeddedRunModelSwitchRequest = {
    provider: string;
    model: string;
    authProfileId?: string;
    authProfileIdSource?: "auto" | "user";
};
export type EmbeddedRunWaiter = {
    resolve: (ended: boolean) => void;
    timer: NodeJS.Timeout;
};
export type AbandonedEmbeddedRun = {
    sessionId: string;
    sessionKey?: string;
    sessionFile?: string;
    abandonedAtMs: number;
    reason: "timeout";
};
export declare const ACTIVE_EMBEDDED_RUNS: Map<string, EmbeddedAgentQueueHandle>;
export declare const ACTIVE_EMBEDDED_RUN_SNAPSHOTS: Map<string, ActiveEmbeddedRunSnapshot>;
export declare const ACTIVE_EMBEDDED_RUN_SESSION_IDS_BY_KEY: Map<string, string>;
export declare const ACTIVE_EMBEDDED_RUN_SESSION_IDS_BY_FILE: Map<string, string>;
export declare const ABANDONED_EMBEDDED_RUNS_BY_SESSION_ID: Map<string, AbandonedEmbeddedRun>;
export declare const ABANDONED_EMBEDDED_RUN_SESSION_IDS_BY_KEY: Map<string, string>;
export declare const ABANDONED_EMBEDDED_RUN_SESSION_IDS_BY_FILE: Map<string, string>;
export declare const EMBEDDED_RUN_WAITERS: Map<string, Set<EmbeddedRunWaiter>>;
export declare const EMBEDDED_RUN_MODEL_SWITCH_REQUESTS: Map<string, EmbeddedRunModelSwitchRequest>;
/** Counts active embedded runs while including auto-reply registry runs for shared sessions. */
export declare function getActiveEmbeddedRunCount(): number;
/** Lists active embedded-run session keys from both embedded and auto-reply registries. */
export declare function listActiveEmbeddedRunSessionKeys(): string[];
/** Lists active embedded-run session ids from all embedded-run lookup maps. */
export declare function listActiveEmbeddedRunSessionIds(): string[];

import type { AgentEventPayload } from "../infra/agent-events.js";
export type ChatRunTiming = {
    ackedAtMs: number;
    connId: string;
    dispatchStartedAtMs?: number;
    firstAssistantEventSent?: boolean;
    receivedAtMs: number;
};
export type ChatRunEntry = {
    sessionKey: string;
    agentId?: string;
    clientRunId: string;
    chatSendTiming?: ChatRunTiming;
};
export type BufferedAgentEvent = {
    sessionKey?: string;
    agentId?: string;
    payload: AgentEventPayload & {
        spawnedBy?: string;
    };
};
export type ChatRunRegistry = {
    add: (sessionId: string, entry: ChatRunEntry) => void;
    peek: (sessionId: string) => ChatRunEntry | undefined;
    shift: (sessionId: string) => ChatRunEntry | undefined;
    remove: (sessionId: string, clientRunId: string, sessionKey?: string) => ChatRunEntry | undefined;
    clear: () => void;
};
/** Create the FIFO registry that maps session IDs to active chat runs. */
export declare function createChatRunRegistry(): ChatRunRegistry;
export type ChatRunState = {
    registry: ChatRunRegistry;
    rawBuffers: Map<string, string>;
    buffers: Map<string, string>;
    /** Last time any buffered assistant text changed, including suppressed raw buffers. */
    bufferUpdatedAt: Map<string, number>;
    deltaSentAt: Map<string, number>;
    /** Length of text at the time of the last broadcast, used to avoid duplicate flushes. */
    deltaLastBroadcastLen: Map<string, number>;
    deltaLastBroadcastText: Map<string, string>;
    agentDeltaSentAt: Map<string, number>;
    bufferedAgentEvents: Map<string, BufferedAgentEvent>;
    abortedRuns: Map<string, number>;
    clearRun: (runId: string) => void;
    clear: () => void;
};
/** Create all mutable chat-run maps used by Gateway runtime state. */
export declare function createChatRunState(): ChatRunState;
export type ToolEventRecipientRegistry = {
    add: (runId: string, connId: string) => void;
    get: (runId: string) => ReadonlySet<string> | undefined;
    markFinal: (runId: string) => void;
};
export type SessionEventSubscriberRegistry = {
    subscribe: (connId: string) => void;
    unsubscribe: (connId: string) => void;
    getAll: () => ReadonlySet<string>;
    clear: () => void;
};
export type SessionMessageSubscriberRegistry = {
    subscribe: (connId: string, sessionKey: string) => void;
    unsubscribe: (connId: string, sessionKey: string) => void;
    unsubscribeAll: (connId: string) => void;
    get: (sessionKey: string) => ReadonlySet<string>;
    clear: () => void;
};
/** Create the broad sessions.changed subscriber registry. */
export declare function createSessionEventSubscriberRegistry(): SessionEventSubscriberRegistry;
/** Create the per-session message subscriber registry. */
export declare function createSessionMessageSubscriberRegistry(): SessionMessageSubscriberRegistry;
/** Create the run-id recipient registry used for streaming tool events. */
export declare function createToolEventRecipientRegistry(): ToolEventRecipientRegistry;

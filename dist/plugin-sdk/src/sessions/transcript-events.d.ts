/** Normalized transcript update emitted after a session transcript changes. */
export type SessionTranscriptUpdate = {
    sessionFile: string;
    sessionKey?: string;
    agentId?: string;
    message?: unknown;
    messageId?: string;
    messageSeq?: number;
};
type SessionTranscriptListener = (update: SessionTranscriptUpdate) => void;
/** Registers a listener for normalized session transcript updates. */
export declare function onSessionTranscriptUpdate(listener: SessionTranscriptListener): () => void;
/** Emits a normalized transcript update to all registered listeners. */
export declare function emitSessionTranscriptUpdate(update: string | SessionTranscriptUpdate): void;
export {};

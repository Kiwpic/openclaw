import type { RunCliAgentParams } from "../../agents/cli-runner/types.js";
import type { EmbeddedAgentRunResult } from "../../agents/embedded-agent.js";
import { type SessionEntry } from "../../config/sessions.js";
export type CliToolEventPayload = {
    name: string | undefined;
    phase: "start" | "update";
    args: Record<string, unknown> | undefined;
};
export declare function keepCliSessionBindingOnlyWhenReused(params: {
    result: EmbeddedAgentRunResult;
    existingSessionId?: string;
    onDroppedReplacement?: () => void;
}): EmbeddedAgentRunResult;
export declare function clearDroppedCliSessionBinding(params: {
    provider: string;
    sessionKey?: string;
    sessionStore?: Record<string, SessionEntry>;
    storePath?: string;
    activeSessionEntry?: SessionEntry;
}): Promise<void>;
export declare function runCliAgentWithLifecycle(params: {
    runId: string;
    provider: string;
    runParams: RunCliAgentParams;
    startedAt?: number;
    emitLifecycleStart?: boolean;
    emitLifecycleTerminal?: boolean;
    onAgentRunStart?: () => void;
    suppressAssistantBridge?: boolean;
    onAssistantText?: (text: string) => Promise<void>;
    onReasoningText?: (text: string) => Promise<void>;
    onToolEvent?: (payload: CliToolEventPayload) => Promise<void>;
    onCommentaryText?: (payload: {
        text: string;
        itemId?: string;
    }) => Promise<void>;
    onErrorBeforeLifecycle?: (err: unknown) => Promise<void>;
    transformResult?: (result: EmbeddedAgentRunResult) => EmbeddedAgentRunResult;
}): Promise<EmbeddedAgentRunResult>;

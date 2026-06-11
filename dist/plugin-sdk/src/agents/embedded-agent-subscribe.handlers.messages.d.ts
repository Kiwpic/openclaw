import { type ReplyDirectiveParseResult } from "../auto-reply/reply/reply-directives.js";
import { type AssistantPhase } from "../shared/chat-message-content.js";
import type { BlockReplyPayload } from "./embedded-agent-payloads.js";
import type { EmbeddedAgentSubscribeContext, EmbeddedAgentSubscribeState } from "./embedded-agent-subscribe.handlers.types.js";
import type { AgentEvent, AgentMessage } from "./runtime/index.js";
/** Replaces a silent-reply token with the latest sent messaging-tool text when available. */
export declare function resolveSilentReplyFallbackText(params: {
    text: unknown;
    messagingToolSentTexts: string[];
}): string;
/** Moves queued tool media into a non-reasoning assistant reply payload. */
export declare function consumePendingToolMediaIntoReply(state: Pick<EmbeddedAgentSubscribeState, "pendingToolMediaUrls" | "pendingToolAudioAsVoice" | "pendingToolTrustedLocalMedia">, payload: BlockReplyPayload): BlockReplyPayload;
/** Consumes queued tool media as a standalone reply payload. */
export declare function consumePendingToolMediaReply(state: Pick<EmbeddedAgentSubscribeState, "pendingToolMediaUrls" | "pendingToolAudioAsVoice" | "pendingToolTrustedLocalMedia">): BlockReplyPayload | null;
/** Reads queued tool media without clearing it. */
export declare function readPendingToolMediaReply(state: Pick<EmbeddedAgentSubscribeState, "pendingToolMediaUrls" | "pendingToolAudioAsVoice" | "pendingToolTrustedLocalMedia">): BlockReplyPayload | null;
/** Records parsed reply directives until a sendable reply payload is built. */
export declare function recordPendingAssistantReplyDirectives(state: Pick<EmbeddedAgentSubscribeState, "pendingAssistantReplyDirectives">, parsed: ReplyDirectiveParseResult | null | undefined): void;
/** Merges pending reply directives into one reply payload and clears them. */
export declare function consumePendingAssistantReplyDirectivesIntoReply(state: Pick<EmbeddedAgentSubscribeState, "pendingAssistantReplyDirectives">, payload: BlockReplyPayload): BlockReplyPayload;
/** True when a reply payload has text, media, or voice content worth sending. */
export declare function hasAssistantVisibleReply(params: {
    text?: string;
    mediaUrls?: string[];
    mediaUrl?: string;
    audioAsVoice?: boolean;
}): boolean;
/** Builds normalized stream payload data for assistant visible output. */
export declare function buildAssistantStreamData(params: {
    text?: string;
    delta?: string;
    replace?: boolean;
    mediaUrls?: string[];
    mediaUrl?: string;
    phase?: AssistantPhase;
}): {
    text: string;
    delta: string;
    replace?: true;
    mediaUrls?: string[];
    phase?: AssistantPhase;
};
/** Handles assistant message-start boundaries for streaming state. */
export declare function handleMessageStart(ctx: EmbeddedAgentSubscribeContext, evt: AgentEvent & {
    message: AgentMessage;
}): void;
/** Handles assistant message deltas, reasoning, directives, and block replies. */
export declare function handleMessageUpdate(ctx: EmbeddedAgentSubscribeContext, evt: AgentEvent & {
    message: AgentMessage;
    assistantMessageEvent?: unknown;
}): void;
/** Handles assistant message-end finalization, block flush, and usage commit. */
export declare function handleMessageEnd(ctx: EmbeddedAgentSubscribeContext, evt: AgentEvent & {
    message: AgentMessage;
}): void | Promise<void>;

import type { MessagingToolSend } from "../../agents/embedded-agent-messaging.types.js";
import type { ReplyToMode } from "../../config/types.js";
import type { OriginatingChannelType } from "../templating.js";
import type { ReplyPayload, ReplyThreadingPolicy } from "../types.js";
import { type BlockReplyPipeline } from "./block-reply-pipeline.js";
/** Builds final outbound payloads from agent output and message-tool delivery evidence. */
export declare function buildReplyPayloads(params: {
    payloads: ReplyPayload[];
    isHeartbeat: boolean;
    didLogHeartbeatStrip: boolean;
    silentExpected?: boolean;
    blockStreamingEnabled: boolean;
    blockReplyPipeline: BlockReplyPipeline | null;
    /** Payload keys sent directly (not via pipeline) during tool flush. */
    directlySentBlockKeys?: Set<string>;
    /** Payloads successfully sent directly during tool flush. */
    directlySentBlockPayloads?: ReplyPayload[];
    replyToMode: ReplyToMode;
    replyToChannel?: OriginatingChannelType;
    currentMessageId?: string;
    replyThreading?: ReplyThreadingPolicy;
    messageProvider?: string;
    messagingToolSentTexts?: string[];
    messagingToolSentMediaUrls?: string[];
    messagingToolSentTargets?: MessagingToolSend[];
    originatingChannel?: OriginatingChannelType;
    originatingTo?: string;
    accountId?: string;
    extractMarkdownImages?: boolean;
    normalizeMediaPaths?: (payload: ReplyPayload) => Promise<ReplyPayload>;
}): Promise<{
    replyPayloads: ReplyPayload[];
    didLogHeartbeatStrip: boolean;
}>;

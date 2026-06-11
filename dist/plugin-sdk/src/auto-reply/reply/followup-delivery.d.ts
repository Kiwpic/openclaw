/** Prepares queued follow-up payloads for source-channel delivery. */
import type { MessagingToolSend } from "../../agents/embedded-agent-messaging.types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { ReplyPayload } from "../types.js";
/** Strips heartbeat tokens, applies threading, and dedupes message-tool sends. */
export declare function resolveFollowupDeliveryPayloads(params: {
    cfg: OpenClawConfig;
    payloads: ReplyPayload[];
    messageProvider?: string;
    originatingAccountId?: string;
    originatingChannel?: string;
    originatingChatType?: string | null;
    originatingTo?: string;
    sentMediaUrls?: string[];
    sentTargets?: MessagingToolSend[];
    sentTexts?: string[];
}): ReplyPayload[];

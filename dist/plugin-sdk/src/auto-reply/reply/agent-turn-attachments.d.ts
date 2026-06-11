import type { AcpTurnAttachment as AgentTurnAttachment } from "../../acp/control-plane/manager.types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { MsgContext } from "../templating.js";
import { type RecentInboundHistoryImage } from "./history-media.js";
/** Lazily loads media runtime dependencies for agent-turn attachments. */
export declare function loadAgentTurnMediaRuntime(): Promise<typeof import("./dispatch-acp-media.runtime.js")>;
/** Runtime surface needed to resolve agent-turn media attachments. */
export type AgentTurnAttachmentRuntime = Pick<Awaited<ReturnType<typeof loadAgentTurnMediaRuntime>>, "MediaAttachmentCache" | "isMediaUnderstandingSkipError" | "normalizeAttachments" | "resolveMediaAttachmentLocalRoots">;
/** True when current or recent inbound history may contain agent-turn attachments. */
export declare function hasPotentialAgentTurnAttachments(ctx: MsgContext): boolean;
/** Resolves image attachments for the current agent turn and recent image history. */
export declare function resolveAgentTurnAttachments(params: {
    ctx: MsgContext;
    cfg: OpenClawConfig;
    runtime?: AgentTurnAttachmentRuntime;
    includeRecentHistoryImages?: boolean;
}): Promise<{
    attachments: AgentTurnAttachment[];
    recentHistoryImages: RecentInboundHistoryImage[];
}>;
/** Resolves only the attachment payloads for callers that do not need history metadata. */
export declare function resolveAgentAttachments(params: {
    ctx: MsgContext;
    cfg: OpenClawConfig;
    runtime?: AgentTurnAttachmentRuntime;
}): Promise<AgentTurnAttachment[]>;
/** Converts inline image content into ACP attachment payloads. */
export declare function resolveInlineAgentImageAttachments(images: Array<{
    data: string;
    mimeType: string;
}> | undefined): AgentTurnAttachment[];

import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { CommandSessionMetadataChange } from "./reply/command-session-metadata.js";
import type { DispatchFromConfigResult } from "./reply/dispatch-from-config.types.js";
import type { GetReplyFromConfig } from "./reply/get-reply.types.js";
import { type ReplyDispatcherOptions, type ReplyDispatcherWithTypingOptions } from "./reply/reply-dispatcher.js";
import type { ReplyDispatcher } from "./reply/reply-dispatcher.types.js";
import type { FinalizedMsgContext, MsgContext } from "./templating.js";
import type { GetReplyOptions } from "./types.js";
export type DispatchInboundResult = DispatchFromConfigResult;
export { settleReplyDispatcher, withReplyDispatcher } from "./dispatch-dispatcher.js";
/** Dispatches one finalized inbound message through reply resolution and queued delivery. */
export declare function dispatchInboundMessage(params: {
    ctx: MsgContext | FinalizedMsgContext;
    cfg: OpenClawConfig;
    dispatcher: ReplyDispatcher;
    toolsAllow?: string[];
    replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
    replyResolver?: GetReplyFromConfig;
    onSessionMetadataChanges?: (changes: CommandSessionMetadataChange[]) => void;
}): Promise<DispatchInboundResult>;
/** Creates a buffered dispatcher with typing, hooks, and stale foreground delivery suppression. */
export declare function dispatchInboundMessageWithBufferedDispatcher(params: {
    ctx: MsgContext | FinalizedMsgContext;
    cfg: OpenClawConfig;
    dispatcherOptions: ReplyDispatcherWithTypingOptions;
    toolsAllow?: string[];
    replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
    replyResolver?: GetReplyFromConfig;
    onSessionMetadataChanges?: (changes: CommandSessionMetadataChange[]) => void;
}): Promise<DispatchInboundResult>;
/** Creates a plain dispatcher, installs global send hooks, and dispatches the inbound message. */
export declare function dispatchInboundMessageWithDispatcher(params: {
    ctx: MsgContext | FinalizedMsgContext;
    cfg: OpenClawConfig;
    dispatcherOptions: ReplyDispatcherOptions;
    toolsAllow?: string[];
    replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
    replyResolver?: GetReplyFromConfig;
}): Promise<DispatchInboundResult>;

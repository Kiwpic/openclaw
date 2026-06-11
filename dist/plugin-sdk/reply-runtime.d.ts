import { a as SourceReplyDeliveryMode, n as GetReplyOptions, t as BlockReplyContext, u as ReplyPayload$1 } from "./types-DuQmSZAL.js";
import { n as MsgContext, r as CommandTurnContext, t as FinalizedMsgContext } from "./templating-BKRD9CPP.js";
import { i as OpenClawConfig } from "./types.openclaw-BnYC9Nsr.js";
import { _ as chunkTextWithMode, f as ChunkMode, g as chunkText, h as chunkMarkdownTextWithMode, m as chunkMarkdownText, v as resolveChunkMode, y as resolveTextChunkLimit } from "./outbound.types-D3ZK7TYt.js";
import { $r as CommandSessionMetadataChange, Gr as DispatchReplyWithBufferedBlockDispatcher, Jr as ReplyDispatcherWithTypingOptions, Kr as DispatchReplyWithDispatcher, Qr as GetReplyFromConfig, Ur as finalizeInboundContext, Wr as settleReplyDispatcher, Xr as createReplyDispatcherWithTyping, Yr as createReplyDispatcher, Zr as DispatchFromConfigResult, qr as ReplyDispatcherOptions } from "./types-DDKC2NLO.js";
import { r as ReplyPayload } from "./reply-payload-Pm6BjNsE.js";
import { cn as ReplyDispatcher, on as ReplyDispatchKind } from "./hook-types-DZOg1tFO.js";
import { n as createInboundDebouncer, r as resolveInboundDebounceMs } from "./inbound-debounce-CXPITjVu.js";
import { n as isAbortRequestText, t as isBtwRequestText } from "./btw-command-GjLEEuAO.js";
import { n as normalizeGroupActivation, r as parseActivationCommand } from "./group-activation-CvYoinGh.js";
import { i as stripHeartbeatToken, n as HEARTBEAT_PROMPT, r as resolveHeartbeatPrompt, t as DEFAULT_HEARTBEAT_ACK_MAX_CHARS } from "./heartbeat-DRiYLmwM.js";
import { i as isSilentReplyText, n as SILENT_REPLY_TOKEN, t as HEARTBEAT_TOKEN } from "./tokens-CLx0Aap_.js";
import { t as resetInboundDedupe } from "./inbound-dedupe-ySEx5MpS.js";
import { n as generateConversationLabel, t as ConversationLabelParams } from "./conversation-label-generator-Cn-Aic8W.js";
import { t as createReplyReferencePlanner } from "./reply-reference-LlZP7kJ-.js";

//#region src/auto-reply/dispatch.d.ts
type DispatchInboundResult = DispatchFromConfigResult;
/** Dispatches one finalized inbound message through reply resolution and queued delivery. */
declare function dispatchInboundMessage(params: {
  ctx: MsgContext | FinalizedMsgContext;
  cfg: OpenClawConfig;
  dispatcher: ReplyDispatcher;
  toolsAllow?: string[];
  replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
  replyResolver?: GetReplyFromConfig;
  onSessionMetadataChanges?: (changes: CommandSessionMetadataChange[]) => void;
}): Promise<DispatchInboundResult>;
/** Creates a buffered dispatcher with typing, hooks, and stale foreground delivery suppression. */
declare function dispatchInboundMessageWithBufferedDispatcher(params: {
  ctx: MsgContext | FinalizedMsgContext;
  cfg: OpenClawConfig;
  dispatcherOptions: ReplyDispatcherWithTypingOptions;
  toolsAllow?: string[];
  replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
  replyResolver?: GetReplyFromConfig;
  onSessionMetadataChanges?: (changes: CommandSessionMetadataChange[]) => void;
}): Promise<DispatchInboundResult>;
/** Creates a plain dispatcher, installs global send hooks, and dispatches the inbound message. */
declare function dispatchInboundMessageWithDispatcher(params: {
  ctx: MsgContext | FinalizedMsgContext;
  cfg: OpenClawConfig;
  dispatcherOptions: ReplyDispatcherOptions;
  toolsAllow?: string[];
  replyOptions?: Omit<GetReplyOptions, "onBlockReply">;
  replyResolver?: GetReplyFromConfig;
}): Promise<DispatchInboundResult>;
//#endregion
//#region src/auto-reply/heartbeat-reply-payload.d.ts
/** Pick the last outbound-capable reply payload for heartbeat delivery. */
declare function resolveHeartbeatReplyPayload(replyResult: ReplyPayload$1 | ReplyPayload$1[] | undefined): ReplyPayload$1 | undefined;
//#endregion
//#region src/auto-reply/reply/get-reply.d.ts
declare function getReplyFromConfig(ctx: MsgContext, opts?: GetReplyOptions, configOverride?: OpenClawConfig): Promise<ReplyPayload$1 | ReplyPayload$1[] | undefined>;
//#endregion
//#region src/auto-reply/reply/provider-dispatcher.d.ts
/** Dispatch a reply using the buffered block dispatcher path. */
declare const dispatchReplyWithBufferedBlockDispatcher: DispatchReplyWithBufferedBlockDispatcher;
/** Dispatch a reply using the standard dispatcher path. */
declare const dispatchReplyWithDispatcher: DispatchReplyWithDispatcher;
//#endregion
export { type BlockReplyContext, type ChunkMode, type CommandTurnContext, type ConversationLabelParams, DEFAULT_HEARTBEAT_ACK_MAX_CHARS, type FinalizedMsgContext, type GetReplyOptions, HEARTBEAT_PROMPT, HEARTBEAT_TOKEN, type MsgContext, type ReplyDispatchKind, type ReplyDispatcher, type ReplyDispatcherOptions, type ReplyDispatcherWithTypingOptions, type ReplyPayload, SILENT_REPLY_TOKEN, type SourceReplyDeliveryMode, chunkMarkdownText, chunkMarkdownTextWithMode, chunkText, chunkTextWithMode, createInboundDebouncer, createReplyDispatcher, createReplyDispatcherWithTyping, createReplyReferencePlanner, dispatchInboundMessage, dispatchInboundMessageWithBufferedDispatcher, dispatchInboundMessageWithDispatcher, dispatchReplyWithBufferedBlockDispatcher, dispatchReplyWithDispatcher, finalizeInboundContext, generateConversationLabel, getReplyFromConfig, isAbortRequestText, isBtwRequestText, isSilentReplyText, normalizeGroupActivation, parseActivationCommand, resetInboundDedupe, resolveChunkMode, resolveHeartbeatPrompt, resolveHeartbeatReplyPayload, resolveInboundDebounceMs, resolveTextChunkLimit, settleReplyDispatcher, stripHeartbeatToken };
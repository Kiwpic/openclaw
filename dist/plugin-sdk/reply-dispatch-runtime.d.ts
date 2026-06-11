import { r as CommandTurnContext } from "./templating-BKRD9CPP.js";
import { v as resolveChunkMode } from "./outbound.types-D3ZK7TYt.js";
import { Gr as DispatchReplyWithBufferedBlockDispatcher, Kr as DispatchReplyWithDispatcher, Ur as finalizeInboundContext } from "./types-DDKC2NLO.js";
import { r as ReplyPayload } from "./reply-payload-Pm6BjNsE.js";
import { n as generateConversationLabel } from "./conversation-label-generator-Cn-Aic8W.js";

//#region src/plugin-sdk/reply-dispatch-runtime.d.ts
/** Dispatches a reply with buffered block support after lazy-loading the runtime dispatcher. */
declare const dispatchReplyWithBufferedBlockDispatcher: DispatchReplyWithBufferedBlockDispatcher;
/** Dispatches a reply through the provider dispatcher after lazy-loading runtime code. */
declare const dispatchReplyWithDispatcher: DispatchReplyWithDispatcher;
//#endregion
export { type CommandTurnContext, type DispatchReplyWithBufferedBlockDispatcher, type DispatchReplyWithDispatcher, type ReplyPayload, dispatchReplyWithBufferedBlockDispatcher, dispatchReplyWithDispatcher, finalizeInboundContext, generateConversationLabel, resolveChunkMode };
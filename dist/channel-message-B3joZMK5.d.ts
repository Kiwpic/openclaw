import { ur as deliverInboundReplyWithMessageSendContext } from "./types-Cqh78_VH.js";
import { n as CreateChannelReplyPipelineParams, t as ChannelReplyPipeline } from "./reply-pipeline-XTewVzlx.js";
//#region src/plugin-sdk/channel-message.d.ts
/** @deprecated Use `createChannelMessageReplyPipeline(...)` from `openclaw/plugin-sdk/channel-outbound`. */
declare function createChannelTurnReplyPipeline(params: CreateChannelReplyPipelineParams): ChannelReplyPipeline;
/** @deprecated Use `deliverInboundReplyWithMessageSendContext(...)` from `openclaw/plugin-sdk/channel-outbound`. */
declare const deliverDurableInboundReplyPayload: typeof deliverInboundReplyWithMessageSendContext;
//#endregion
export { deliverDurableInboundReplyPayload as n, createChannelTurnReplyPipeline as t };
import { t as createChannelReplyPipeline } from "./reply-pipeline-CWeNMHM9.js";
import "./inbound-reply-dispatch-DmWW_OUH.js";
import { t as deliverInboundReplyWithMessageSendContext } from "./channel-outbound-4CAePuYc.js";
//#region src/plugin-sdk/channel-message.ts
/** @deprecated Use `createChannelMessageReplyPipeline(...)` from `openclaw/plugin-sdk/channel-outbound`. */
function createChannelTurnReplyPipeline(params) {
	return createChannelReplyPipeline(params);
}
/** @deprecated Use `deliverInboundReplyWithMessageSendContext(...)` from `openclaw/plugin-sdk/channel-outbound`. */
const deliverDurableInboundReplyPayload = deliverInboundReplyWithMessageSendContext;
//#endregion
export { deliverDurableInboundReplyPayload as n, createChannelTurnReplyPipeline as t };

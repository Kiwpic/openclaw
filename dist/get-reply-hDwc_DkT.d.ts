import { i as OpenClawConfig } from "./types.openclaw-C8mNEQ_D.js";
import { n as GetReplyOptions, s as ReplyPayload } from "./types-C-W7t3kM.js";
import { n as MsgContext } from "./templating-VE1b5M1p.js";

//#region src/auto-reply/reply/get-reply.d.ts
declare function getReplyFromConfig(ctx: MsgContext, opts?: GetReplyOptions, configOverride?: OpenClawConfig): Promise<ReplyPayload | ReplyPayload[] | undefined>;
//#endregion
export { getReplyFromConfig as t };
import { T as ReplyToMode } from "./types.base-D238NWJT.js";
import { i as ReplyThreadingPolicy } from "./types-C-W7t3kM.js";
//#region src/auto-reply/reply/reply-threading.d.ts
/** Build threading policy for batched reply-to mode. */
declare function resolveBatchedReplyThreadingPolicy(mode: ReplyToMode, isBatched: boolean): ReplyThreadingPolicy | undefined;
//#endregion
export { resolveBatchedReplyThreadingPolicy as t };
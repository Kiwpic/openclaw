import type { ReplyPayload } from "./types.js";
/** Pick the last outbound-capable reply payload for heartbeat delivery. */
export declare function resolveHeartbeatReplyPayload(replyResult: ReplyPayload | ReplyPayload[] | undefined): ReplyPayload | undefined;

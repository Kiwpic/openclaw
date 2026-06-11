import type { PluginHookReplyPayloadSendingContext } from "../../plugins/hook-types.js";
import type { ReplyPayload } from "../reply-payload.js";
import type { ReplyDispatchKind } from "./reply-dispatcher.types.js";
/** True when plugins have registered outbound reply payload hooks. */
export declare function hasReplyPayloadSendingHooks(): boolean;
/** Runs plugin hooks that may rewrite or cancel an outbound reply payload. */
export declare function runReplyPayloadSendingHook(params: {
    payload: ReplyPayload;
    kind: ReplyDispatchKind;
    channel?: string;
    sessionKey?: string;
    runId?: string;
    context: PluginHookReplyPayloadSendingContext;
}): Promise<ReplyPayload | null>;

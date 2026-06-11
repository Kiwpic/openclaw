/**
 * Detects message-tool-only sends that should terminate an agent turn.
 */
import type { SourceReplyDeliveryMode } from "../../../auto-reply/get-reply-options.types.js";
import type { AfterToolCallContext, AfterToolCallResult, Agent } from "../../runtime/index.js";
/**
 * Determines whether a `message.send` tool call should end the turn in
 * message-tool-only delivery mode. Only implicit-route, non-dry-run, delivered
 * sends qualify; explicit routes and errors keep the model loop alive.
 */
export declare function shouldTerminateAfterMessageToolOnlySend(params: {
    sourceReplyDeliveryMode?: SourceReplyDeliveryMode;
    context: AfterToolCallContext;
    hookResult?: AfterToolCallResult;
}): boolean;
/** Installs an after-tool hook that terminates the turn after a qualifying message send. */
export declare function installMessageToolOnlyTerminalHook(params: {
    agent: Agent;
    sourceReplyDeliveryMode?: SourceReplyDeliveryMode;
    onDeliveredSourceReply?: () => void;
}): void;

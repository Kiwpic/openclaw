import { type ConversationTargetParams } from "./conversation-target.js";
export { channelRouteFromDeliveryContext, deliveryContextFromChannelRoute, deliveryContextFromSession, deliveryContextKey, mergeDeliveryContext, normalizeDeliveryContext, normalizeSessionDeliveryFields, } from "./delivery-context.shared.js";
export type { DeliveryContext, DeliveryContextSessionSource } from "./delivery-context.types.js";
/** Formats a conversation id into a generic deliverable target. */
export declare function formatConversationTarget(params: ConversationTargetParams): string | undefined;
/** Resolves a channel conversation into generic target fields for delivery routing. */
export declare function resolveConversationDeliveryTarget(params: {
    channel?: string;
    conversationId?: string | number;
    parentConversationId?: string | number;
}): {
    to?: string;
    threadId?: string;
};

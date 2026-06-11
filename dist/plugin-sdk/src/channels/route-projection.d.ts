import type { SessionEntry } from "../config/sessions/types.js";
import type { ConversationRef, SessionBindingRecord } from "../infra/outbound/session-binding-service.js";
import { type ChannelRouteChatType, type ChannelRouteRef } from "../plugin-sdk/channel-route.js";
import { type ConversationTargetParams } from "../utils/conversation-target.js";
import { type DeliveryContext } from "../utils/delivery-context.shared.js";
/** Formats a conversation id into a deliverable target, using channel hooks before generic fallback. */
export declare function formatConversationTarget(params: ConversationTargetParams): string | undefined;
/** Resolves a channel conversation into target/thread fields for delivery routing. */
export declare function resolveConversationDeliveryTarget(params: ConversationTargetParams): {
    to?: string;
    threadId?: string;
};
/** Channel route normalized enough to address an outbound delivery target. */
export type RoutableChannelRouteRef = ChannelRouteRef & {
    channel: string;
    target: {
        to: string;
        rawTo?: string;
        chatType?: ChannelRouteChatType;
    };
};
/** Session fields that can carry or reconstruct a channel route. */
export type SessionRouteDeliveryFields = {
    route?: ChannelRouteRef;
    deliveryContext?: DeliveryContext;
    lastChannel?: string;
    lastTo?: string;
    lastAccountId?: string;
    lastThreadId?: string | number;
};
/** Normalizes a route and rejects routes that cannot address a channel target. */
export declare function normalizeRoutableChannelRoute(route?: ChannelRouteRef | null): RoutableChannelRouteRef | undefined;
/** Converts legacy delivery context metadata into a channel route. */
export declare function routeFromDeliveryContext(context?: DeliveryContext): ChannelRouteRef | undefined;
/** Converts a channel route back to legacy delivery context metadata. */
export declare function deliveryContextFromRoute(route?: ChannelRouteRef): DeliveryContext | undefined;
/** Projects the best known delivery route from a stored session entry. */
export declare function routeFromSessionEntry(entry?: SessionEntry | null): ChannelRouteRef | undefined;
/** Builds session persistence fields from a channel route. */
export declare function sessionDeliveryFieldsFromRoute(route?: ChannelRouteRef): SessionRouteDeliveryFields;
/** Converts a persisted conversation reference into a channel route. */
export declare function routeFromConversationRef(conversation?: ConversationRef | null): ChannelRouteRef | undefined;
/** Converts a conversation reference into a routable channel route. */
export declare function routableRouteFromConversationRef(conversation?: ConversationRef | null): RoutableChannelRouteRef | undefined;
/** Extracts a channel route from a session binding record. */
export declare function routeFromBindingRecord(binding?: SessionBindingRecord | null): ChannelRouteRef | undefined;
/** Extracts a routable channel route from a session binding record. */
export declare function routableRouteFromBindingRecord(binding?: SessionBindingRecord | null): RoutableChannelRouteRef | undefined;
/** Projects route fields used by older session and delivery callers. */
export declare function routeToDeliveryFields(route?: ChannelRouteRef): {
    deliveryContext?: DeliveryContext;
    channel?: string;
    to?: string;
    accountId?: string;
    threadId?: string | number;
};
/** Compares whether two routes address the same delivery target. */
export declare function routesShareDeliveryTarget(params: {
    left?: ChannelRouteRef | null;
    right?: ChannelRouteRef | null;
}): boolean;

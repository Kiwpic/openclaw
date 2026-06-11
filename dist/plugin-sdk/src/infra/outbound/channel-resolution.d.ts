import type { ChannelMessageAdapterShape } from "../../channels/message/types.js";
import type { ChannelPlugin } from "../../channels/plugins/types.plugin.js";
import type { ChannelAgentPromptAdapter, ChannelAllowlistAdapter, ChannelCapabilities, ChannelCommandAdapter, ChannelConfigAdapter, ChannelConversationBindingSupport, ChannelDirectoryAdapter, ChannelGroupAdapter, ChannelMessageActionAdapter, ChannelMessagingAdapter, ChannelOutboundAdapter, ChannelPairingAdapter, ChannelStreamingAdapter, ChannelThreadingAdapter } from "../../channels/plugins/types.public.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { type DeliverableMessageChannel } from "../../utils/message-channel.js";
type ChannelTargetResolver = NonNullable<ChannelMessagingAdapter["targetResolver"]>;
/** Prompt-facing channel capabilities exposed to outbound/runtime callers. */
export type ChannelPromptRuntime = {
    messageToolHints?: ChannelAgentPromptAdapter["messageToolHints"];
    messageToolCapabilities?: ChannelAgentPromptAdapter["messageToolCapabilities"];
    reactionGuidance?: ChannelAgentPromptAdapter["reactionGuidance"];
    hasNativeApprovalPromptUi?: boolean;
};
/** Read-only channel runtime facade assembled from a channel plugin. */
export type OutboundChannelRuntime = {
    id: string;
    label: string;
    chatTypes: NonNullable<ChannelCapabilities["chatTypes"]>;
    preferSessionLookupForAnnounceTarget?: ChannelPlugin["meta"]["preferSessionLookupForAnnounceTarget"];
    actions?: ChannelMessageActionAdapter;
    approvalCapability?: ChannelPlugin["approvalCapability"];
    conversationBindings?: ChannelConversationBindingSupport;
    allowlist?: ChannelAllowlistAdapter;
    pairing?: ChannelPairingAdapter;
    commands?: ChannelCommandAdapter;
    defaultAccountId?: ChannelConfigAdapter<unknown>["defaultAccountId"];
    directory?: ChannelDirectoryAdapter;
    promptRuntime?: ChannelPromptRuntime;
    inferTargetChatType?: ChannelMessagingAdapter["inferTargetChatType"];
    normalizeTarget?: ChannelMessagingAdapter["normalizeTarget"];
    looksLikeTargetId?: ChannelTargetResolver["looksLikeId"];
    targetResolverHint?: string;
    resolveMessagingTargetFallback?: ChannelTargetResolver["resolveTarget"];
    resolveSessionTarget?: ChannelMessagingAdapter["resolveSessionTarget"];
    formatTargetDisplay?: ChannelMessagingAdapter["formatTargetDisplay"];
    resolveOutboundSessionRoute?: ChannelMessagingAdapter["resolveOutboundSessionRoute"];
    buildCrossContextPresentation?: ChannelMessagingAdapter["buildCrossContextPresentation"];
    transformReplyPayload?: ChannelMessagingAdapter["transformReplyPayload"];
    resolveAllowFrom?: ChannelConfigAdapter<unknown>["resolveAllowFrom"];
    resolveDefaultTo?: ChannelConfigAdapter<unknown>["resolveDefaultTo"];
    formatAllowFrom?: ChannelPlugin["config"]["formatAllowFrom"];
    allowFromFallback?: NonNullable<ChannelPlugin["elevated"]>["allowFromFallback"];
    resolveGroupRequireMention?: ChannelGroupAdapter["resolveRequireMention"];
    resolveGroupToolPolicy?: ChannelGroupAdapter["resolveToolPolicy"];
    queueDebounceMs?: NonNullable<NonNullable<ChannelPlugin["defaults"]>["queue"]>["debounceMs"];
    buildThreadingToolContext?: ChannelThreadingAdapter["buildToolContext"];
    resolveAutoThreadId?: ChannelThreadingAdapter["resolveAutoThreadId"];
    resolveReplyToMode?: ChannelThreadingAdapter["resolveReplyToMode"];
    resolveReplyTransport?: ChannelThreadingAdapter["resolveReplyTransport"];
    outbound?: ChannelOutboundAdapter;
    resolveTarget?: ChannelOutboundAdapter["resolveTarget"];
    textChunkLimit?: ChannelOutboundAdapter["textChunkLimit"];
    shouldTreatDeliveredTextAsVisible?: ChannelOutboundAdapter["shouldTreatDeliveredTextAsVisible"];
    shouldTreatRoutedTextAsVisible?: ChannelOutboundAdapter["shouldTreatRoutedTextAsVisible"];
    targetsMatchForReplySuppression?: ChannelOutboundAdapter["targetsMatchForReplySuppression"];
    hasStructuredReplyPayload?: ChannelMessagingAdapter["hasStructuredReplyPayload"];
    blockStreamingCoalesceDefaults?: ChannelStreamingAdapter["blockStreamingCoalesceDefaults"];
};
/** Resets outbound channel bootstrap/resolution state for isolated tests. */
export declare function resetOutboundChannelResolutionStateForTest(): void;
/** Normalizes a raw channel id and rejects non-deliverable/internal channels. */
export declare function normalizeDeliverableOutboundChannel(raw?: string | null): DeliverableMessageChannel | undefined;
/** Resolves a deliverable outbound channel plugin, optionally bootstrapping it. */
export declare function resolveOutboundChannelPlugin(params: {
    channel: string;
    cfg?: OpenClawConfig;
    allowBootstrap?: boolean;
}): ChannelPlugin | undefined;
/** Resolves the message adapter for a deliverable outbound channel. */
export declare function resolveOutboundChannelMessageAdapter(params: {
    channel: string;
    cfg?: OpenClawConfig;
    allowBootstrap?: boolean;
}): ChannelMessageAdapterShape | undefined;
/** Resolves a channel plugin for read-only metadata paths. */
export declare function resolveOutboundChannelPluginForRead(params: {
    channel: string;
    cfg?: OpenClawConfig;
}): ChannelPlugin | undefined;
/** Resolves the read-only outbound runtime facade for a channel. */
export declare function resolveOutboundChannelRuntime(params: {
    channel: string;
    cfg?: OpenClawConfig;
}): OutboundChannelRuntime | undefined;
/** Reads an already-loaded channel plugin without bootstrapping. */
export declare function resolveLoadedOutboundChannelPluginForRead(params: {
    channel: string;
}): ChannelPlugin | undefined;
export {};

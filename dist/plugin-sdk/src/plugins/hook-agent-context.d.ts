import type { PluginHookAgentContext } from "./hook-types.js";
/** Resolves the channel id exposed to plugin agent hooks. */
export declare function resolveAgentHookChannelId(params: {
    sessionKey?: string | null;
    messageChannel?: string | null;
    messageProvider?: string | null;
    currentChannelId?: string | null;
    messageTo?: string | null;
}): string | undefined;
/** Builds channel/provider fields for plugin agent hook context. */
export declare function buildAgentHookContextChannelFields(params: {
    sessionKey?: string | null;
    messageChannel?: string | null;
    messageProvider?: string | null;
    currentChannelId?: string | null;
    messageTo?: string | null;
}): Pick<PluginHookAgentContext, "channelId" | "messageProvider">;

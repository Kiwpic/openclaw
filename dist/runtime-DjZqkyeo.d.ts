import { $n as PluginRuntime } from "./types-Cqh78_VH.js";
import { f as sendMessageDiscord } from "./send-8vm7ZcN_.js";
import { t as discordMessageActions } from "./channel-actions-CB9A0b0M.js";

//#region extensions/discord/src/runtime.d.ts
type DiscordChannelRuntime = {
  messageActions?: typeof discordMessageActions;
  sendMessageDiscord?: typeof sendMessageDiscord;
};
type DiscordRuntime = PluginRuntime & {
  channel: PluginRuntime["channel"] & {
    discord?: DiscordChannelRuntime;
  };
};
declare const setDiscordRuntime: (next: DiscordRuntime) => void, getOptionalDiscordRuntime: () => DiscordRuntime | null, getDiscordRuntime: () => DiscordRuntime;
//#endregion
export { setDiscordRuntime as t };
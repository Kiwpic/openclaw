import { t as ChannelPlugin } from "./types.plugin-BaoU_CNH.js";
import { t as TelegramProbe } from "./probe-DGulSID2.js";
import { t as ResolvedTelegramAccount } from "./accounts-BUUNUCIf.js";

//#region extensions/telegram/src/channel.d.ts
declare const telegramPlugin: ChannelPlugin<ResolvedTelegramAccount, TelegramProbe, unknown>;
//#endregion
export { telegramPlugin as t };
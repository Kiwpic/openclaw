import { t as ChannelPlugin } from "./types.plugin-BaoU_CNH.js";
import { s as SignalProbe$1, t as ResolvedSignalAccount } from "./accounts-BL-Oo3GC.js";

//#region extensions/signal/src/channel.d.ts
type SignalProbe = SignalProbe$1;
declare const signalPlugin: ChannelPlugin<ResolvedSignalAccount, SignalProbe>;
//#endregion
export { signalPlugin as t };
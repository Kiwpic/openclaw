import { t as createPluginRuntimeStore } from "./runtime-store-uAKGMqTs.js";
import "./channel-outbound-4CAePuYc.js";
import "./ssrf-runtime-BOGN5pUi.js";
import "./channel-inbound-C-xuV2_-.js";
import "./channel-pairing-Bk6_JhTm.js";
//#region extensions/nextcloud-talk/src/runtime.ts
const { setRuntime: setNextcloudTalkRuntime, getRuntime: getNextcloudTalkRuntime } = createPluginRuntimeStore({
	pluginId: "nextcloud-talk",
	errorMessage: "Nextcloud Talk runtime not initialized"
});
//#endregion
export { setNextcloudTalkRuntime as n, getNextcloudTalkRuntime as t };

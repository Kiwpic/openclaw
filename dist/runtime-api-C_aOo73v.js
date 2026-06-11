import "./media-runtime-BFeas1fg.js";
import "./text-chunking-D45TeeEs.js";
import { t as createPluginRuntimeStore } from "./runtime-store-uAKGMqTs.js";
import "./channel-outbound-4CAePuYc.js";
import "./outbound-media-BUfz-CW0.js";
import "./ssrf-runtime-BOGN5pUi.js";
import "./dangerous-name-runtime-zP2lSdMQ.js";
import "./channel-status-DxlXr0Xh.js";
import "./bundled-channel-config-schema-DwZyvOaO.js";
import "./channel-config-primitives-Bk3iiMir.js";
import "./channel-actions-BOfvC-Gl.js";
import "./channel-inbound-C-xuV2_-.js";
import "./channel-feedback-Bi1IYmE_.js";
import "./channel-pairing-Bk6_JhTm.js";
import "./webhook-request-guards-gS2khsvD.js";
import "./webhook-ingress-Bbq3Q5bT.js";
import "./webhook-targets-CC1azUCz.js";
//#region extensions/googlechat/src/runtime.ts
const { setRuntime: setGoogleChatRuntime, getRuntime: getGoogleChatRuntime } = createPluginRuntimeStore({
	pluginId: "googlechat",
	errorMessage: "Google Chat runtime not initialized"
});
//#endregion
export { setGoogleChatRuntime as n, getGoogleChatRuntime as t };

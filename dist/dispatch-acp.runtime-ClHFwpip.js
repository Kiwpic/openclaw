import { t as createLazyImportLoader } from "./lazy-promise-BONnzNfb.js";
//#region src/auto-reply/reply/dispatch-acp.runtime.ts
const dispatchAcpLoader = createLazyImportLoader(() => import("./dispatch-acp-D-DJ-y_Y.js"));
const dispatchAcpCommandBypassLoader = createLazyImportLoader(() => import("./dispatch-acp-command-bypass-CxKXHz4D.js"));
function loadDispatchAcp() {
	return dispatchAcpLoader.load();
}
function loadDispatchAcpCommandBypass() {
	return dispatchAcpCommandBypassLoader.load();
}
async function shouldBypassAcpDispatchForCommand(...args) {
	return (await loadDispatchAcpCommandBypass()).shouldBypassAcpDispatchForCommand(...args);
}
async function tryDispatchAcpReply(...args) {
	return await (await loadDispatchAcp()).tryDispatchAcpReply(...args);
}
//#endregion
export { shouldBypassAcpDispatchForCommand, tryDispatchAcpReply };

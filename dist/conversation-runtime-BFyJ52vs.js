import "./session-binding-service-cfUL2BWM.js";
import "./thread-bindings-policy-DZGWBoLX.js";
import "./channel-access-compat-D8U8oQUf.js";
import "./conversation-binding-BaGUSr1m.js";
import "./binding-registry-DEX4J6tW.js";
import "./session-C33DO-0F.js";
import "./pairing-store-CxANz_ON.js";
import "./binding-targets-Bfquy83S.js";
import "./binding-routing-BXdJLqTu.js";
import "./pairing-labels-BrpGMnBC.js";
//#region src/channels/session-meta.ts
let inboundSessionRuntimePromise = null;
function loadInboundSessionRuntime() {
	inboundSessionRuntimePromise ??= import("./inbound.runtime.js");
	return inboundSessionRuntimePromise;
}
/**
* Best-effort inbound session metadata recorder for channel plugin command handlers.
*/
async function recordInboundSessionMetaSafe(params) {
	const runtime = await loadInboundSessionRuntime();
	const storePath = runtime.resolveStorePath(params.cfg.session?.store, { agentId: params.agentId });
	try {
		await runtime.recordSessionMetaFromInbound({
			storePath,
			sessionKey: params.sessionKey,
			ctx: params.ctx
		});
	} catch (err) {
		params.onError?.(err);
	}
}
//#endregion
export { recordInboundSessionMetaSafe as t };

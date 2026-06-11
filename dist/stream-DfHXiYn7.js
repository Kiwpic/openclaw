import { i as streamSimple } from "./stream-Dt0UwlYc.js";
import "./llm-CUHn-yiw.js";
import "./provider-stream-shared-Bes9sdRY.js";
import { i as streamWithPayloadPatch } from "./moonshot-thinking-RT-IFIsx.js";
import { u as normalizeProviderId } from "./provider-model-shared-BoOCf3gs.js";
import { t as isFireworksKimiModelId } from "./model-id-BhN5iHky.js";
//#region extensions/fireworks/stream.ts
function isFireworksProviderId(providerId) {
	const normalized = normalizeProviderId(providerId);
	return normalized === "fireworks" || normalized === "fireworks-ai";
}
function createFireworksKimiThinkingDisabledWrapper(baseStreamFn) {
	const underlying = baseStreamFn ?? streamSimple;
	return (model, context, options) => streamWithPayloadPatch(underlying, model, context, options, (payloadObj) => {
		payloadObj.thinking = { type: "disabled" };
		delete payloadObj.reasoning;
		delete payloadObj.reasoning_effort;
		delete payloadObj.reasoningEffort;
	});
}
function wrapFireworksProviderStream(ctx) {
	if (!isFireworksProviderId(ctx.provider) || ctx.model?.api !== "openai-completions" || !isFireworksKimiModelId(ctx.modelId)) return;
	return createFireworksKimiThinkingDisabledWrapper(ctx.streamFn);
}
//#endregion
export { wrapFireworksProviderStream as n, createFireworksKimiThinkingDisabledWrapper as t };

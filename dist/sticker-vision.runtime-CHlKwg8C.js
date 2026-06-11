import { x as findModelInCatalog } from "./model-selection-shared-BS5V4jxN.js";
import { c as resolveDefaultModelForAgent } from "./model-selection-Dz9iVzmE.js";
import { i as modelSupportsVision, n as loadModelCatalog } from "./model-catalog-DEDx_Sg4.js";
import "./agent-runtime-DprQxIO2.js";
//#region extensions/telegram/src/sticker-vision.runtime.ts
async function resolveStickerVisionSupportRuntime(params) {
	const catalog = await loadModelCatalog({ config: params.cfg });
	const defaultModel = resolveDefaultModelForAgent({
		cfg: params.cfg,
		agentId: params.agentId
	});
	const entry = findModelInCatalog(catalog, defaultModel.provider, defaultModel.model);
	if (!entry) return false;
	return modelSupportsVision(entry);
}
//#endregion
export { resolveStickerVisionSupportRuntime };

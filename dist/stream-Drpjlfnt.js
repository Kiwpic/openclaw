import { r as createDeepSeekV4OpenAICompatibleThinkingWrapper } from "./provider-stream-shared-Bes9sdRY.js";
import { a as isDeepSeekV4ModelRef } from "./models-CWX956e3.js";
//#region extensions/deepseek/stream.ts
function createDeepSeekV4ThinkingWrapper(baseStreamFn, thinkingLevel) {
	return createDeepSeekV4OpenAICompatibleThinkingWrapper({
		baseStreamFn,
		thinkingLevel,
		shouldPatchModel: isDeepSeekV4ModelRef
	});
}
//#endregion
export { createDeepSeekV4ThinkingWrapper as t };

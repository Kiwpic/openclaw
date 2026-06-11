import "./subsystem-BzXSmsuh.js";
import "./provider-env-vars-BDsn4OJY.js";
import "./failover-error-_eAyLqsc.js";
import "./provider-registry-dMbcR6M5.js";
import "./runtime-shared-imggI4J4.js";
import "./provider-model-shared-BoOCf3gs.js";
//#region src/plugin-sdk/image-generation-core.ts
/** Default OpenAI image model used when image-generation provider config omits one. */
const OPENAI_DEFAULT_IMAGE_MODEL = "gpt-image-2";
let imageGenerationCoreAuthRuntimePromise;
async function loadImageGenerationCoreAuthRuntime() {
	imageGenerationCoreAuthRuntimePromise ??= import("./image-generation-core.auth.runtime.js");
	return imageGenerationCoreAuthRuntimePromise;
}
/** Resolve image-generation provider API keys through the lazy auth runtime helper. */
async function resolveApiKeyForProvider(...args) {
	return (await loadImageGenerationCoreAuthRuntime()).resolveApiKeyForProvider(...args);
}
//#endregion
export { resolveApiKeyForProvider as n, OPENAI_DEFAULT_IMAGE_MODEL as t };

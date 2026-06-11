import { a as createGoogleThinkingStreamWrapper } from "./provider-stream-shared-Bes9sdRY.js";
import { a as buildProviderReplayFamilyHooks } from "./provider-model-shared-BoOCf3gs.js";
import { n as buildProviderToolCompatFamilyHooks } from "./provider-tools-VmwDm8UA.js";
import "./thinking-api-DNM9wbUx.js";
import { u as resolveGoogleThinkingProfile } from "./provider-policy-BwI9YX4L.js";
//#region extensions/google/provider-hooks.ts
const GOOGLE_GEMINI_PROVIDER_HOOKS = {
	...buildProviderReplayFamilyHooks({ family: "google-gemini" }),
	...buildProviderToolCompatFamilyHooks("gemini"),
	resolveThinkingProfile: (context) => resolveGoogleThinkingProfile(context),
	wrapStreamFn: createGoogleThinkingStreamWrapper
};
//#endregion
export { GOOGLE_GEMINI_PROVIDER_HOOKS as t };

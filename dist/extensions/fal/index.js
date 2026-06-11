import { t as definePluginEntry } from "../../plugin-entry-C7DUzV0e.js";
import { t as buildFalImageGenerationProvider } from "../../image-generation-provider-DeDr4HFn.js";
import { t as buildFalMusicGenerationProvider } from "../../music-generation-provider-DdsQjJd5.js";
import { t as createFalProvider } from "../../provider-registration-BoIDiN83.js";
import { t as buildFalVideoGenerationProvider } from "../../video-generation-provider-BEDUK2AX.js";
var fal_default = definePluginEntry({
	id: "fal",
	name: "fal Provider",
	description: "Bundled fal image, video, and music generation provider",
	register(api) {
		api.registerProvider(createFalProvider());
		api.registerImageGenerationProvider(buildFalImageGenerationProvider());
		api.registerMusicGenerationProvider(buildFalMusicGenerationProvider());
		api.registerVideoGenerationProvider(buildFalVideoGenerationProvider());
	}
});
//#endregion
export { fal_default as default };

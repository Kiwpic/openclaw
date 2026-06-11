import { t as definePluginEntry } from "../../plugin-entry-C7DUzV0e.js";
import { n as buildMinimaxPortalImageGenerationProvider, t as buildMinimaxImageGenerationProvider } from "../../image-generation-provider-BdZowwjA.js";
import { n as minimaxPortalMediaUnderstandingProvider, t as minimaxMediaUnderstandingProvider } from "../../media-understanding-provider-DHLcD9j9.js";
import { n as buildMinimaxPortalMusicGenerationProvider, t as buildMinimaxMusicGenerationProvider } from "../../music-generation-provider-CaM7mSQh.js";
import { r as registerMinimaxProviders } from "../../provider-registration-BxnEo0eO.js";
import { t as buildMinimaxSpeechProvider } from "../../speech-provider-BMgWWHBM.js";
import { t as createMiniMaxWebSearchProvider } from "../../minimax-web-search-provider-CpxRKFEX.js";
import { n as buildMinimaxVideoGenerationProvider, t as buildMinimaxPortalVideoGenerationProvider } from "../../video-generation-provider-Dql4oRHc.js";
//#region extensions/minimax/index.ts
var minimax_default = definePluginEntry({
	id: "minimax",
	name: "MiniMax",
	description: "Bundled MiniMax API-key and OAuth provider plugin",
	register(api) {
		registerMinimaxProviders(api);
		api.registerMediaUnderstandingProvider(minimaxMediaUnderstandingProvider);
		api.registerMediaUnderstandingProvider(minimaxPortalMediaUnderstandingProvider);
		api.registerImageGenerationProvider(buildMinimaxImageGenerationProvider());
		api.registerImageGenerationProvider(buildMinimaxPortalImageGenerationProvider());
		api.registerMusicGenerationProvider(buildMinimaxMusicGenerationProvider());
		api.registerMusicGenerationProvider(buildMinimaxPortalMusicGenerationProvider());
		api.registerVideoGenerationProvider(buildMinimaxVideoGenerationProvider());
		api.registerVideoGenerationProvider(buildMinimaxPortalVideoGenerationProvider());
		api.registerSpeechProvider(buildMinimaxSpeechProvider());
		api.registerWebSearchProvider(createMiniMaxWebSearchProvider());
	}
});
//#endregion
export { minimax_default as default };

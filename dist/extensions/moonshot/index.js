import { a as buildProviderReplayFamilyHooks } from "../../provider-model-shared-BoOCf3gs.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DeUHELEU.js";
import { i as MOONSHOT_THINKING_STREAM_HOOKS } from "../../provider-stream-pTNqwBID.js";
import "../../provider-stream-family-D5Mkisut.js";
import { a as buildMoonshotProvider, i as applyMoonshotNativeStreamingUsageCompat } from "../../provider-catalog-CTnlkVo1.js";
import { n as applyMoonshotConfig, r as applyMoonshotConfigCn, t as MOONSHOT_DEFAULT_MODEL_REF } from "../../onboard-BnGbSgXY.js";
import "../../api-BkgQtzzX.js";
import { n as moonshotMediaUnderstandingProvider } from "../../media-understanding-provider-BYzqkuvx2.js";
import { t as createKimiWebSearchProvider } from "../../kimi-web-search-provider-D8_e0MXt.js";
var moonshot_default = defineSingleProviderPluginEntry({
	id: "moonshot",
	name: "Moonshot Provider",
	description: "Bundled Moonshot provider plugin",
	provider: {
		label: "Moonshot",
		docsPath: "/providers/moonshot",
		aliases: ["moonshotai", "moonshot-ai"],
		auth: [{
			methodId: "api-key",
			label: "Kimi API key (.ai)",
			hint: "Kimi K2.6 + Kimi",
			optionKey: "moonshotApiKey",
			flagName: "--moonshot-api-key",
			envVar: "MOONSHOT_API_KEY",
			promptMessage: "Enter Moonshot API key",
			defaultModel: MOONSHOT_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyMoonshotConfig(cfg),
			wizard: { groupLabel: "Moonshot AI (Kimi K2.6)" }
		}, {
			methodId: "api-key-cn",
			label: "Kimi API key (.cn)",
			hint: "Kimi K2.6 + Kimi",
			optionKey: "moonshotApiKey",
			flagName: "--moonshot-api-key",
			envVar: "MOONSHOT_API_KEY",
			promptMessage: "Enter Moonshot API key (.cn)",
			defaultModel: MOONSHOT_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyMoonshotConfigCn(cfg),
			wizard: { groupLabel: "Moonshot AI (Kimi K2.6)" }
		}],
		catalog: {
			buildProvider: buildMoonshotProvider,
			buildStaticProvider: buildMoonshotProvider,
			allowExplicitBaseUrl: true
		},
		applyNativeStreamingUsageCompat: ({ providerConfig }) => applyMoonshotNativeStreamingUsageCompat(providerConfig),
		...buildProviderReplayFamilyHooks({
			family: "openai-compatible",
			sanitizeToolCallIds: false,
			dropReasoningFromHistory: false
		}),
		...MOONSHOT_THINKING_STREAM_HOOKS,
		resolveThinkingProfile: () => ({
			levels: [{
				id: "off",
				label: "off"
			}, {
				id: "low",
				label: "on"
			}],
			defaultLevel: "off"
		})
	},
	register(api) {
		api.registerMediaUnderstandingProvider(moonshotMediaUnderstandingProvider);
		api.registerWebSearchProvider(createKimiWebSearchProvider());
	}
});
//#endregion
export { moonshot_default as default };

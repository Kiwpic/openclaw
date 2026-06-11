import { i as isProxyReasoningUnsupported, r as createOpenRouterWrapper } from "../../proxy-Du_t3XSu.js";
import { i as PASSTHROUGH_GEMINI_REPLAY_HOOKS } from "../../provider-model-shared-BoOCf3gs.js";
import { a as readConfiguredProviderCatalogEntries } from "../../provider-catalog-shared-DDI-jTgV.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DeUHELEU.js";
import "../../provider-stream-pTNqwBID.js";
import { t as createDeepInfraAnthropicCacheWrapper } from "../../cache-wrapper-B_oOUQdb.js";
import { l as getDeepInfraSurfaceFallbackCatalog, r as DEEPINFRA_DEFAULT_MODEL_REF, s as discoverDeepInfraModels, u as hasDeepInfraApiKey } from "../../provider-models-Dwh_SRNh.js";
import { t as buildDeepInfraImageGenerationProvider } from "../../image-generation-provider-p1I68D6h.js";
import { t as buildDeepInfraMediaUnderstandingProvider } from "../../media-understanding-provider-1eHGNLx0.js";
import { t as buildDeepInfraMemoryEmbeddingAdapter } from "../../memory-embedding-adapter-v_rnLa0u.js";
import { t as applyDeepInfraConfig } from "../../onboard-sKlMD7S_.js";
import { r as buildStaticDeepInfraProvider, t as buildDeepInfraApiKeyCatalog } from "../../provider-catalog-C5t9A2ao.js";
import { t as buildDeepInfraSpeechProvider } from "../../speech-provider-DBHAAGzh.js";
import { n as listDeepInfraVideoGenCatalog, t as listDeepInfraImageGenCatalog } from "../../surface-model-catalogs-CajqXLaL.js";
import { t as buildDeepInfraVideoGenerationProvider } from "../../video-generation-provider-BseF3a8n.js";
//#region extensions/deepinfra/index.ts
const PROVIDER_ID = "deepinfra";
var deepinfra_default = defineSingleProviderPluginEntry({
	id: PROVIDER_ID,
	name: "DeepInfra Provider",
	description: "Bundled DeepInfra provider plugin",
	provider: {
		label: "DeepInfra",
		docsPath: "/providers/deepinfra",
		auth: [{
			methodId: "api-key",
			label: "DeepInfra API key",
			hint: "Unified API for open source models",
			optionKey: "deepinfraApiKey",
			flagName: "--deepinfra-api-key",
			envVar: "DEEPINFRA_API_KEY",
			promptMessage: "Enter DeepInfra API key",
			noteTitle: "DeepInfra",
			noteMessage: ["DeepInfra provides an OpenAI-compatible API for open source and frontier models.", "Get your API key at: https://deepinfra.com/dash/api_keys"].join("\n"),
			defaultModel: DEEPINFRA_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyDeepInfraConfig(cfg),
			wizard: {
				choiceId: "deepinfra-api-key",
				choiceLabel: "DeepInfra API key",
				choiceHint: "Unified API for open source models",
				groupId: PROVIDER_ID,
				groupLabel: "DeepInfra",
				groupHint: "Unified API for open source models"
			}
		}],
		catalog: {
			order: "simple",
			run: (ctx) => buildDeepInfraApiKeyCatalog(ctx),
			staticRun: async () => ({ provider: buildStaticDeepInfraProvider() })
		},
		augmentModelCatalog: async ({ config, env, agentDir }) => {
			const configured = readConfiguredProviderCatalogEntries({
				config,
				providerId: PROVIDER_ID
			});
			const hasApiKey = hasDeepInfraApiKey({
				env,
				agentDir,
				config
			});
			const seen = new Set(configured.map((entry) => entry.id));
			const discovered = await discoverDeepInfraModels({
				hasApiKey,
				env,
				agentDir
			});
			const merged = [...configured];
			for (const model of discovered) {
				if (seen.has(model.id)) continue;
				seen.add(model.id);
				const input = model.input;
				merged.push({
					provider: PROVIDER_ID,
					id: model.id,
					name: model.name ?? model.id,
					...typeof model.contextWindow === "number" && model.contextWindow > 0 ? { contextWindow: model.contextWindow } : {},
					...typeof model.reasoning === "boolean" ? { reasoning: model.reasoning } : {},
					...input && input.length > 0 ? { input } : {}
				});
			}
			return merged;
		},
		normalizeConfig: ({ providerConfig }) => providerConfig,
		normalizeTransport: ({ api, baseUrl }) => baseUrl === "https://api.deepinfra.com/v1/openai" ? {
			api,
			baseUrl
		} : void 0,
		...PASSTHROUGH_GEMINI_REPLAY_HOOKS,
		wrapStreamFn: (ctx) => {
			const thinkingLevel = isProxyReasoningUnsupported(ctx.modelId) ? void 0 : ctx.thinkingLevel;
			return createDeepInfraAnthropicCacheWrapper(createOpenRouterWrapper(ctx.streamFn, thinkingLevel));
		},
		isModernModelRef: () => true,
		isCacheTtlEligible: (ctx) => ctx.modelId.toLowerCase().startsWith("anthropic/")
	},
	register(api) {
		const catalog = getDeepInfraSurfaceFallbackCatalog();
		api.registerImageGenerationProvider(buildDeepInfraImageGenerationProvider({ imageGenModels: catalog.imageGen }));
		api.registerModelCatalogProvider({
			provider: PROVIDER_ID,
			kinds: ["image_generation"],
			liveCatalog: listDeepInfraImageGenCatalog
		});
		api.registerMediaUnderstandingProvider(buildDeepInfraMediaUnderstandingProvider({
			vlmModels: catalog.vlm,
			sttModels: catalog.stt
		}));
		api.registerMemoryEmbeddingProvider(buildDeepInfraMemoryEmbeddingAdapter({ embedModels: catalog.embed }));
		api.registerSpeechProvider(buildDeepInfraSpeechProvider({ ttsModels: catalog.tts }));
		api.registerVideoGenerationProvider(buildDeepInfraVideoGenerationProvider({ videoGenModels: catalog.videoGen }));
		api.registerModelCatalogProvider({
			provider: PROVIDER_ID,
			kinds: ["video_generation"],
			liveCatalog: listDeepInfraVideoGenCatalog
		});
	}
});
//#endregion
export { deepinfra_default as default };

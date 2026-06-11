import { t as definePluginEntry } from "../../plugin-entry-C7DUzV0e.js";
import { t as deepgramMediaUnderstandingProvider } from "../../media-understanding-provider-E0WaQzuy.js";
import { t as buildDeepgramRealtimeTranscriptionProvider } from "../../realtime-transcription-provider-BhYDwvlQ.js";
//#region extensions/deepgram/index.ts
var deepgram_default = definePluginEntry({
	id: "deepgram",
	name: "Deepgram Media Understanding",
	description: "Bundled Deepgram audio transcription provider",
	register(api) {
		api.registerMediaUnderstandingProvider(deepgramMediaUnderstandingProvider);
		api.registerRealtimeTranscriptionProvider(buildDeepgramRealtimeTranscriptionProvider());
	}
});
//#endregion
export { deepgram_default as default };

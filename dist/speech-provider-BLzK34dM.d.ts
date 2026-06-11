import { qn as SpeechProviderPlugin } from "./types-Cqh78_VH.js";
import { c as DeepInfraSurfaceModel } from "./provider-models-DPMG0STV.js";
//#region extensions/deepinfra/speech-provider.d.ts
declare function buildDeepInfraSpeechProvider(options?: {
  ttsModels?: readonly DeepInfraSurfaceModel[];
}): SpeechProviderPlugin;
//#endregion
export { buildDeepInfraSpeechProvider as t };
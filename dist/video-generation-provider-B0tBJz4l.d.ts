import { o as VideoGenerationProvider } from "./video-generation-CeWQ0V_c.js";
import { c as DeepInfraSurfaceModel } from "./provider-models-DPMG0STV.js";

//#region extensions/deepinfra/video-generation-provider.d.ts
declare function buildDeepInfraVideoGenerationProvider(options?: {
  videoGenModels?: readonly DeepInfraSurfaceModel[];
}): VideoGenerationProvider;
//#endregion
export { buildDeepInfraVideoGenerationProvider as t };
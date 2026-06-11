import { l as ImageGenerationProvider } from "./types-j60rEKgp.js";
import { c as DeepInfraSurfaceModel } from "./provider-models-DPMG0STV.js";

//#region extensions/deepinfra/image-generation-provider.d.ts
declare function buildDeepInfraImageGenerationProvider(options?: {
  imageGenModels?: readonly DeepInfraSurfaceModel[];
}): ImageGenerationProvider;
//#endregion
export { buildDeepInfraImageGenerationProvider as t };
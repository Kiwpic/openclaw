import { Ac as ProviderRuntimeModel } from "../../types-Cqh78_VH.js";
import { Kt as ProviderResolveDynamicModelContext } from "../../plugin-entry-Dw44CWny.js";

//#region extensions/google/provider-models.d.ts
declare function resolveGoogleGeminiForwardCompatModel(params: {
  providerId: string;
  templateProviderId?: string;
  ctx: ProviderResolveDynamicModelContext;
}): ProviderRuntimeModel | undefined;
declare function isModernGoogleModel(modelId: string): boolean;
//#endregion
export { isModernGoogleModel, resolveGoogleGeminiForwardCompatModel };
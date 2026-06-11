import { f as ModelProviderConfig } from "../../types.models-C7xuGz22.js";
import { kc as ProviderThinkingProfile } from "../../types-Cqh78_VH.js";
//#region extensions/openai/provider-policy-api.d.ts
declare function normalizeConfig(params: {
  provider: string;
  providerConfig: ModelProviderConfig;
}): ModelProviderConfig;
declare function resolveThinkingProfile(params: {
  provider: string;
  modelId: string;
}): ProviderThinkingProfile | null;
//#endregion
export { normalizeConfig, resolveThinkingProfile };
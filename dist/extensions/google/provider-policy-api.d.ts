import { f as ModelProviderConfig } from "../../types.models-C7xuGz22.js";
import { kc as ProviderThinkingProfile } from "../../types-Cqh78_VH.js";
import { wt as ProviderDefaultThinkingPolicyContext } from "../../plugin-entry-Dw44CWny.js";
//#region extensions/google/provider-policy-api.d.ts
declare function normalizeConfig(params: {
  provider: string;
  providerConfig: ModelProviderConfig;
}): ModelProviderConfig;
declare function resolveThinkingProfile(context: ProviderDefaultThinkingPolicyContext): ProviderThinkingProfile | undefined;
//#endregion
export { normalizeConfig, resolveThinkingProfile };
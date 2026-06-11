import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { f as ModelProviderConfig } from "../../types.models-C7xuGz22.js";
import { kc as ProviderThinkingProfile } from "../../types-Cqh78_VH.js";
import { t as applyAnthropicConfigDefaults } from "../../config-defaults-jkvYykz7.js";
//#region extensions/anthropic/provider-policy-api.d.ts
/** Normalize Anthropic provider config without importing runtime registration. */
declare function normalizeConfig(params: {
  provider: string;
  providerConfig: ModelProviderConfig;
}): ModelProviderConfig;
/** Apply Anthropic config defaults through the provider-policy seam. */
declare function applyConfigDefaults(params: Parameters<typeof applyAnthropicConfigDefaults>[0]): OpenClawConfig;
/** Resolve Claude thinking profile for Anthropic or Claude CLI providers. */
declare function resolveThinkingProfile(params: {
  provider: string;
  modelId: string;
  params?: Record<string, unknown>;
}): ProviderThinkingProfile | {
  readonly levels: readonly [{
    readonly id: "off";
  }];
  readonly defaultLevel: "off";
} | null;
//#endregion
export { applyConfigDefaults, normalizeConfig, resolveThinkingProfile };
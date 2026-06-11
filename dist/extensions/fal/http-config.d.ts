import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { h as ProviderRequestCapability } from "../../provider-request-config-Bu6e-enT.js";
import { s as AuthProfileStore } from "../../types-CB15MYx7.js";
import { h as resolveProviderHttpRequestConfig } from "../../provider-http-BGUWr2Bd.js";
//#region extensions/fal/http-config.d.ts
type FalAuthenticatedRequest = {
  cfg?: OpenClawConfig;
  agentDir?: string;
  authStore?: AuthProfileStore;
};
declare function resolveFalHttpRequestConfig(params: {
  req: FalAuthenticatedRequest;
  baseUrl?: string;
  capability: ProviderRequestCapability;
}): Promise<ReturnType<typeof resolveProviderHttpRequestConfig>>;
//#endregion
export { resolveFalHttpRequestConfig };
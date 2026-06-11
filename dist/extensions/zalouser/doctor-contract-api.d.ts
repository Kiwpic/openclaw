import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { C as ChannelDoctorConfigMutation, T as ChannelDoctorLegacyConfigRule } from "../../types.adapters-uRT96T7f.js";
//#region extensions/zalouser/src/doctor-contract.d.ts
declare const legacyConfigRules: ChannelDoctorLegacyConfigRule[];
declare function normalizeCompatibilityConfig(params: {
  cfg: OpenClawConfig;
}): ChannelDoctorConfigMutation;
//#endregion
export { legacyConfigRules, normalizeCompatibilityConfig };
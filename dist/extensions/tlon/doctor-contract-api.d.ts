import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { t as LegacyConfigRule } from "../../legacy.shared-CFJyEGh7.js";
import { C as ChannelDoctorConfigMutation } from "../../types.adapters-uRT96T7f.js";
//#region extensions/tlon/src/doctor-contract.d.ts
declare const legacyConfigRules: LegacyConfigRule[];
declare const normalizeCompatibilityConfig: (params: {
  cfg: OpenClawConfig;
}) => ChannelDoctorConfigMutation;
//#endregion
export { legacyConfigRules, normalizeCompatibilityConfig };
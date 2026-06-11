import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { t as PluginDoctorStateMigration } from "../../runtime-doctor-uTAqN-LP.js";
import { C as ChannelDoctorConfigMutation, T as ChannelDoctorLegacyConfigRule } from "../../types.adapters-uRT96T7f.js";
//#region extensions/matrix/src/doctor-contract.d.ts
declare const legacyConfigRules: ChannelDoctorLegacyConfigRule[];
declare function normalizeCompatibilityConfig({
  cfg
}: {
  cfg: OpenClawConfig;
}): ChannelDoctorConfigMutation;
//#endregion
//#region extensions/matrix/doctor-contract-api.d.ts
declare const stateMigrations: PluginDoctorStateMigration[];
//#endregion
export { legacyConfigRules, normalizeCompatibilityConfig, stateMigrations };
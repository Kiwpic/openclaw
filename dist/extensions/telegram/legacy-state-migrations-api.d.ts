import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { U as ChannelLegacyStateMigrationPlan } from "../../types.core-FIbwi2ME.js";
//#region extensions/telegram/src/state-migrations.d.ts
declare function detectTelegramLegacyStateMigrations(params: {
  cfg: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  stateDir?: string;
}): Promise<ChannelLegacyStateMigrationPlan[]>;
//#endregion
export { detectTelegramLegacyStateMigrations };
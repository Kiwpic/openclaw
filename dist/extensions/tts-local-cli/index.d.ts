import { A as OpenClawPluginDefinition } from "../../types-Cqh78_VH.js";
import { v as OpenClawPluginConfigSchema, y as OpenClawPluginDefinition$1 } from "../../plugin-entry-Dw44CWny.js";
//#region extensions/tts-local-cli/index.d.ts
declare const _default: {
  id: string;
  name: string;
  description: string;
  configSchema: OpenClawPluginConfigSchema;
  register: NonNullable<OpenClawPluginDefinition$1["register"]>;
} & Pick<OpenClawPluginDefinition, "kind" | "reload" | "nodeHostCommands" | "securityAuditCollectors">;
//#endregion
export { _default as default };
import { A as OpenClawPluginDefinition } from "../../types-Cqh78_VH.js";
import { v as OpenClawPluginConfigSchema, y as OpenClawPluginDefinition$1 } from "../../plugin-entry-Dw44CWny.js";
//#region extensions/bonjour/index.d.ts
/** Plugin entry for Bonjour/mDNS gateway discovery. */
declare const _default: {
  id: string;
  name: string;
  description: string;
  configSchema: OpenClawPluginConfigSchema;
  register: NonNullable<OpenClawPluginDefinition$1["register"]>;
} & Pick<OpenClawPluginDefinition, "kind" | "reload" | "nodeHostCommands" | "securityAuditCollectors">;
//#endregion
export { _default as default };
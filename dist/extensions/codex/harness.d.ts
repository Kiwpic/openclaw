import { Ta as AgentHarness } from "../../types-Cqh78_VH.js";
import { n as CodexAppServerModel, r as CodexAppServerModelListResult, t as CodexAppServerListModelsOptions } from "../../models-JzN-jJht.js";

//#region extensions/codex/harness.d.ts
/**
 * Creates the Codex app-server harness used for attempts, side questions,
 * compaction, reset, and disposal.
 */
declare function createCodexAppServerAgentHarness(options?: {
  id?: string;
  label?: string;
  providerIds?: Iterable<string>;
  pluginConfig?: unknown;
  resolvePluginConfig?: () => unknown;
}): AgentHarness;
//#endregion
export { type CodexAppServerListModelsOptions, type CodexAppServerModel, type CodexAppServerModelListResult, createCodexAppServerAgentHarness };
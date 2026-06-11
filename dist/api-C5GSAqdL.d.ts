import { ws as OpenClawPluginToolContext } from "./types-Cqh78_VH.js";
import { n as ChannelSetupWizard } from "./setup-wizard-types-CPfzozCs.js";
import { H as ChannelSetupAdapter } from "./types.adapters-uRT96T7f.js";
import { a as AnyAgentTool } from "./plugin-entry-Dw44CWny.js";
//#region extensions/zalouser/src/tool.d.ts
type ZalouserToolContext = Pick<OpenClawPluginToolContext, "deliveryContext">;
declare function createZalouserTool(context?: ZalouserToolContext): AnyAgentTool;
//#endregion
//#region extensions/zalouser/src/setup-core.d.ts
declare const zalouserSetupAdapter: ChannelSetupAdapter;
declare function createZalouserSetupWizardProxy(loadWizard: () => Promise<ChannelSetupWizard>): ChannelSetupWizard;
//#endregion
//#region extensions/zalouser/src/setup-surface.d.ts
declare const zalouserSetupWizard: ChannelSetupWizard;
//#endregion
export { createZalouserTool as i, createZalouserSetupWizardProxy as n, zalouserSetupAdapter as r, zalouserSetupWizard as t };
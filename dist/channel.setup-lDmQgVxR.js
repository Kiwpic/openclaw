import { n as zalouserSetupAdapter } from "./setup-core-Bshx9EHA.js";
import { t as createZalouserPluginBase } from "./shared-CXkSe7bo.js";
import { t as zalouserSetupWizard } from "./setup-surface-CcHsguAF.js";
//#region extensions/zalouser/src/channel.setup.ts
const zalouserSetupPlugin = { ...createZalouserPluginBase({
	setupWizard: zalouserSetupWizard,
	setup: zalouserSetupAdapter
}) };
//#endregion
export { zalouserSetupPlugin as t };

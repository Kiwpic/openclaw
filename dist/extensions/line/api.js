import { n as lineChannelPluginCommon, t as linePlugin } from "../../channel-BGA7iRXA.js";
import { n as lineSetupAdapter, t as lineSetupWizard } from "../../setup-surface-D2ZWb8qI.js";
//#region extensions/line/src/channel.setup.ts
const lineSetupPlugin = {
	id: "line",
	...lineChannelPluginCommon,
	setupWizard: lineSetupWizard,
	setup: lineSetupAdapter
};
//#endregion
export { linePlugin, lineSetupPlugin };

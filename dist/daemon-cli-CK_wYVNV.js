import { t as formatDocsLink } from "./links-CsLBrRff.js";
import { r as theme } from "./theme-vjDs9tao.js";
import { t as addGatewayServiceCommands } from "./register-service-commands-ZY5Ue5qQ.js";
import "./install-QYeHboSE.js";
import "./lifecycle-Dnko_rq-.js";
import "./status-DmOy4J89.js";
//#region src/cli/daemon-cli/register.ts
/** Register the legacy daemon command group. */
function registerDaemonCli(program) {
	addGatewayServiceCommands(program.command("daemon").description("Manage the Gateway service (launchd/systemd/schtasks)").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/gateway", "docs.openclaw.ai/cli/gateway")}\n`), { statusDescription: "Show service install status + probe connectivity/capability" });
}
//#endregion
export { registerDaemonCli as t };

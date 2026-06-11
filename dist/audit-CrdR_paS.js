import { t as inspectDiscordAccount } from "./account-inspect-BLM-6oyB.js";
import { O as fetchChannelPermissionsDiscord } from "./send.shared-tu0ajrOE.js";
import "./send-GX6GuTlX.js";
import { n as collectDiscordAuditChannelIdsForAccount, t as auditDiscordChannelPermissionsWithFetcher } from "./audit-core-SkumqA6Z.js";
//#region extensions/discord/src/audit.ts
function collectDiscordAuditChannelIds(params) {
	return collectDiscordAuditChannelIdsForAccount(inspectDiscordAccount({
		cfg: params.cfg,
		accountId: params.accountId
	}).config);
}
async function auditDiscordChannelPermissions(params) {
	return await auditDiscordChannelPermissionsWithFetcher({
		...params,
		fetchChannelPermissions: fetchChannelPermissionsDiscord
	});
}
//#endregion
export { collectDiscordAuditChannelIds as n, auditDiscordChannelPermissions as t };

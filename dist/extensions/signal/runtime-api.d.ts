import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { $n as PluginRuntime } from "../../types-Cqh78_VH.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-Dh6XMgGH.js";
import { g as chunkText } from "../../outbound.types-Bnwv5ftu.js";
import { v as ChannelMessageActionAdapter } from "../../types.core-FIbwi2ME.js";
import { l as normalizeE164 } from "../../utils-CRegZsWE.js";
import { t as ChannelPlugin } from "../../types.plugin-BaoU_CNH.js";
import { r as emptyPluginConfigSchema } from "../../config-schema-Bz3cStnC.js";
import { g as OpenClawPluginApi } from "../../plugin-entry-Dw44CWny.js";
import { r as buildChannelConfigSchema } from "../../config-schema-jXAeMqcd.js";
import { s as migrateBaseNameToDefaultAccount, t as applyAccountNameToChannelSection } from "../../setup-helpers-DWTMOsxs.js";
import { n as deleteAccountFromConfigSection, r as setAccountEnabledInConfigSection } from "../../config-helpers-DJ2aeMTn.js";
import { n as formatPairingApproveHint } from "../../helpers-GYDWTM2Q.js";
import { d as getChatChannelMeta } from "../../core-C3yVY7g8.js";
import { t as formatCliCommand } from "../../command-format-CUz7-yqH.js";
import { D as resolveChannelMediaMaxBytes } from "../../media-runtime-B8lHaN8-.js";
import { t as detectBinary } from "../../detect-binary-Drm6r9o4.js";
import { t as formatDocsLink } from "../../links-DFOTZJs1.js";
import { n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-DEj6LNUz.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-CFjlYpMw.js";
import { c as collectStatusIssuesFromLastError, d as createDefaultChannelRuntimeState, n as buildBaseChannelStatusSummary, t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BrfOKxEU.js";
import { o as SignalConfigSchema } from "../../bundled-channel-config-schema-D72cgFjh.js";
import { a as resolveSignalAccount, c as probeSignal, i as resolveDefaultSignalAccountId, n as listEnabledSignalAccounts, o as SignalAccountConfig, r as listSignalAccountIds, t as ResolvedSignalAccount } from "../../accounts-BL-Oo3GC.js";
import { a as sendMessageSignal, f as monitorSignalProvider, p as signalMessageActions, u as resolveSignalReactionLevel } from "../../send-CY6nvx5H.js";
import { c as installSignalCli, n as normalizeSignalMessagingTarget, t as looksLikeSignalTargetId } from "../../normalize-BtYM5FLJ.js";
import { i as sendReactionSignal, r as removeReactionSignal } from "../../send-reactions-BMprpn1K.js";

//#region extensions/signal/src/runtime.d.ts
declare const setSignalRuntime: (next: PluginRuntime) => void, getSignalRuntime: () => PluginRuntime, getOptionalSignalRuntime: () => PluginRuntime | null, clearSignalRuntime: () => void;
//#endregion
export { type ChannelMessageActionAdapter, type ChannelPlugin, DEFAULT_ACCOUNT_ID, type OpenClawConfig, type OpenClawPluginApi, PAIRING_APPROVED_MESSAGE, type PluginRuntime, type ResolvedSignalAccount, type SignalAccountConfig, SignalConfigSchema, applyAccountNameToChannelSection, buildBaseAccountStatusSnapshot, buildBaseChannelStatusSummary, buildChannelConfigSchema, chunkText, collectStatusIssuesFromLastError, createDefaultChannelRuntimeState, deleteAccountFromConfigSection, detectBinary, emptyPluginConfigSchema, formatCliCommand, formatDocsLink, formatPairingApproveHint, getChatChannelMeta, installSignalCli, listEnabledSignalAccounts, listSignalAccountIds, looksLikeSignalTargetId, migrateBaseNameToDefaultAccount, monitorSignalProvider, normalizeAccountId, normalizeE164, normalizeSignalMessagingTarget, probeSignal, removeReactionSignal, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelMediaMaxBytes, resolveDefaultGroupPolicy, resolveDefaultSignalAccountId, resolveSignalAccount, resolveSignalReactionLevel, sendMessageSignal, sendReactionSignal, setAccountEnabledInConfigSection, setSignalRuntime, signalMessageActions };
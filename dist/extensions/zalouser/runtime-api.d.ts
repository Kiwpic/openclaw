import { i as OpenClawConfig } from "../../types.openclaw-C8mNEQ_D.js";
import { S as MarkdownTableMode } from "../../types.base-D238NWJT.js";
import { o as GroupToolPolicyConfig } from "../../types.tools-DZk2axJU.js";
import { n as isDangerousNameMatchingEnabled } from "../../dangerous-name-matching-BML7qCTf.js";
import { $n as PluginRuntime, ws as OpenClawPluginToolContext } from "../../types-Cqh78_VH.js";
import { n as RuntimeEnv } from "../../runtime-Bxifh4bY.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-Dh6XMgGH.js";
import { P as ChannelStatusIssue, m as ChannelGroupContext, r as ChannelAccountSnapshot, t as BaseProbeResult, u as ChannelDirectoryEntry, v as ChannelMessageActionAdapter } from "../../types.core-FIbwi2ME.js";
import { c as deliverTextOrMediaReply, p as isNumericTargetId, r as ReplyPayload, t as OutboundReplyPayload, v as resolveSendableOutboundReplyParts, w as sendPayloadWithChunkedTextAndMedia } from "../../reply-payload-DK8c1ZQN.js";
import { t as ChannelPlugin } from "../../types.plugin-BaoU_CNH.js";
import { p as resolveInboundMentionDecision } from "../../mention-gating-D6dFDlTf.js";
import { i as createChannelReplyPipeline } from "../../reply-pipeline-XTewVzlx.js";
import { a as AnyAgentTool } from "../../plugin-entry-Dw44CWny.js";
import { r as buildChannelConfigSchema } from "../../config-schema-jXAeMqcd.js";
import { r as resolvePreferredOpenClawTmpDir } from "../../tmp-openclaw-dir-ubX-9dkk.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, i as resolveOpenProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-DEj6LNUz.js";
import { t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BrfOKxEU.js";
import { l as loadOutboundMediaFromUrl } from "../../outbound-media-DGjHHo1-.js";
import { f as mergeAllowlist, m as summarizeMapping, n as formatAllowFromLowercase } from "../../allow-from-DAzkuAuT.js";
import { r as createChannelPairingController } from "../../channel-pairing-pZpat_my.js";
import { t as chunkTextForOutbound } from "../../text-chunking-CuFAtrpW.js";
import { t as zalouserPlugin } from "../../channel-Cc2c6jwK.js";
import { t as zalouserSetupPlugin } from "../../channel.setup-KqTuMwV2.js";
import { i as createZalouserTool, n as createZalouserSetupWizardProxy, r as zalouserSetupAdapter, t as zalouserSetupWizard } from "../../api-C5GSAqdL.js";
import { n as isZalouserMutableGroupEntry, t as collectZalouserSecurityAuditFindings } from "../../security-audit-DHVCmSL2.js";

//#region extensions/zalouser/src/runtime.d.ts
declare const setZalouserRuntime: (next: PluginRuntime) => void, getZalouserRuntime: () => PluginRuntime;
//#endregion
export { type AnyAgentTool, type BaseProbeResult, type ChannelAccountSnapshot, type ChannelDirectoryEntry, type ChannelGroupContext, type ChannelMessageActionAdapter, type ChannelPlugin, type ChannelStatusIssue, DEFAULT_ACCOUNT_ID, type GroupToolPolicyConfig, type MarkdownTableMode, type OpenClawConfig, type OpenClawPluginToolContext, type OutboundReplyPayload, type PluginRuntime, type ReplyPayload, type RuntimeEnv, buildBaseAccountStatusSnapshot, buildChannelConfigSchema, chunkTextForOutbound, collectZalouserSecurityAuditFindings, createChannelReplyPipeline as createChannelMessageReplyPipeline, createChannelPairingController, createZalouserSetupWizardProxy, createZalouserTool, deliverTextOrMediaReply, formatAllowFromLowercase, isDangerousNameMatchingEnabled, isNumericTargetId, isZalouserMutableGroupEntry, loadOutboundMediaFromUrl, mergeAllowlist, normalizeAccountId, resolveDefaultGroupPolicy, resolveInboundMentionDecision, resolveOpenProviderRuntimeGroupPolicy, resolvePreferredOpenClawTmpDir, resolveSendableOutboundReplyParts, sendPayloadWithChunkedTextAndMedia, setZalouserRuntime, summarizeMapping, warnMissingProviderGroupPolicyFallbackOnce, zalouserPlugin, zalouserSetupAdapter, zalouserSetupPlugin, zalouserSetupWizard };
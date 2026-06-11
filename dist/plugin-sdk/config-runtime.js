import { o as coerceSecretRef } from "../types.secrets-_0JOMGE5.js";
import "../agent-scope-MrLta7Pq.js";
import { c as resolveDefaultAgentId } from "../agent-scope-config-CgCYpZfK.js";
import { n as resolveConfiguredSecretInputWithFallback, r as resolveRequiredConfiguredSecretRefInputString, t as resolveConfiguredSecretInputString } from "../resolve-configured-secret-input-string-9uwQlTwC.js";
import { a as loadConfig, d as readConfigFileSnapshotForWrite, i as getRuntimeConfig, n as clearConfigCache, x as writeConfigFile } from "../io-CXv-CSA-.js";
import { t as resolveAgentMaxConcurrent } from "../agent-limits-DGV0ALs8.js";
import { i as resolveActiveTalkProviderConfig } from "../talk-CgnqIqtK.js";
import { i as getRuntimeConfigSnapshot, s as getRuntimeConfigSourceSnapshot, t as clearRuntimeConfigSnapshot, v as setRuntimeConfigSnapshot } from "../runtime-snapshot-D93_HOsR.js";
import { i as replaceConfigFile, n as mutateConfigFile } from "../config-DA9SoGs3.js";
import { t as canonicalizeMainSessionAlias } from "../main-session-Eahn-btj.js";
import { u as resolveStorePath } from "../paths-NEwU8m3X.js";
import { V as resolveSessionStoreEntry, t as loadSessionStore$1 } from "../store-load-Dck9nI8T.js";
import { a as patchSessionEntry, b as resolveGroupSessionKey, d as updateSessionStore, f as updateSessionStoreEntry, i as listSessionEntries, l as saveSessionStore, m as clearSessionStoreCacheForTest, o as readSessionUpdatedAt, p as upsertSessionEntry, r as getSessionEntry, s as recordSessionMetaFromInbound, u as updateLastRoute } from "../store-DzYHq4iO.js";
import { c as resolveSessionResetPolicy, i as resolveThreadFlag, n as resolveChannelResetConfig, o as evaluateSessionFreshness, r as resolveSessionResetType } from "../reset-BPxXM_vx.js";
import { n as resolveSessionKey } from "../session-key-CDTkhtVe.js";
import { a as loadCronStore, c as resolveCronStorePath, d as saveCronStore } from "../store-CurrEjza.js";
import { i as resolveToolsBySender, n as resolveChannelGroupRequireMention, t as resolveChannelGroupPolicy } from "../group-policy-CShy7eWv.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, i as resolveOpenProviderRuntimeGroupPolicy, n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy, t as GROUP_POLICY_BLOCKED_LABEL } from "../runtime-group-policy-CSD1Is8G.js";
import { t as applyModelOverrideToSessionEntry } from "../model-overrides-D5WaLvcp.js";
import { n as filterSupplementalContextItems, t as evaluateSupplementalContextVisibility } from "../context-visibility-C5CaKMWO.js";
import { t as resolveChannelModelOverride } from "../model-overrides-B2QijQ9o.js";
import { t as resolveMarkdownTableMode } from "../markdown-tables-CzllrVyJ.js";
import { n as isDangerousNameMatchingEnabled, r as resolveDangerousNameMatchingEnabled } from "../dangerous-name-matching-D4QRC91G.js";
import { n as resolveLivePluginConfigObject, r as resolvePluginConfigObject, t as requireRuntimeConfig } from "../plugin-config-runtime-CpE6DYgJ.js";
import { r as logConfigUpdated } from "../logging-CXEMMlRC.js";
import { d as updateConfig } from "../shared--1lTwxdH.js";
import { n as resolveDefaultContextVisibility, t as resolveChannelContextVisibilityMode } from "../context-visibility-D4NM8ac1.js";
import { n as resolveNativeCommandsEnabled, r as resolveNativeSkillsEnabled, t as isNativeCommandsExplicitlyDisabled } from "../commands-DzC04co_.js";
import { a as resolveTelegramCustomCommands, i as normalizeTelegramCommandName, t as TELEGRAM_COMMAND_NAME_PATTERN } from "../telegram-command-config-XYRniGm-.js";
//#region src/plugin-sdk/config-runtime.ts
/**
* @deprecated Public SDK subpath has no bundled extension production imports.
* Prefer narrower config subpaths such as plugin-config-runtime,
* config-mutation, and runtime-config-snapshot.
*/
/**
* @deprecated Use getSessionEntry/listSessionEntries for reads and
* patchSessionEntry/upsertSessionEntry for writes. loadSessionStore keeps the
* legacy mutable whole-store shape and will remain a compatibility escape hatch.
*/
const loadSessionStore = loadSessionStore$1;
//#endregion
export { GROUP_POLICY_BLOCKED_LABEL, TELEGRAM_COMMAND_NAME_PATTERN, applyModelOverrideToSessionEntry, canonicalizeMainSessionAlias, clearConfigCache, clearRuntimeConfigSnapshot, clearSessionStoreCacheForTest, coerceSecretRef, evaluateSessionFreshness, evaluateSupplementalContextVisibility, filterSupplementalContextItems, getRuntimeConfig, getRuntimeConfigSnapshot, getRuntimeConfigSourceSnapshot, getSessionEntry, isDangerousNameMatchingEnabled, isNativeCommandsExplicitlyDisabled, listSessionEntries, loadConfig, loadCronStore, loadSessionStore, logConfigUpdated, mutateConfigFile, normalizeTelegramCommandName, patchSessionEntry, readConfigFileSnapshotForWrite, readSessionUpdatedAt, recordSessionMetaFromInbound, replaceConfigFile, requireRuntimeConfig, resolveActiveTalkProviderConfig, resolveAgentMaxConcurrent, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelContextVisibilityMode, resolveChannelGroupPolicy, resolveChannelGroupRequireMention, resolveChannelModelOverride, resolveChannelResetConfig, resolveConfiguredSecretInputString, resolveConfiguredSecretInputWithFallback, resolveCronStorePath, resolveDangerousNameMatchingEnabled, resolveDefaultAgentId, resolveDefaultContextVisibility, resolveDefaultGroupPolicy, resolveGroupSessionKey, resolveLivePluginConfigObject, resolveMarkdownTableMode, resolveNativeCommandsEnabled, resolveNativeSkillsEnabled, resolveOpenProviderRuntimeGroupPolicy, resolvePluginConfigObject, resolveRequiredConfiguredSecretRefInputString, resolveSessionKey, resolveSessionResetPolicy, resolveSessionResetType, resolveSessionStoreEntry, resolveStorePath, resolveTelegramCustomCommands, resolveThreadFlag, resolveToolsBySender, saveCronStore, saveSessionStore, setRuntimeConfigSnapshot, updateConfig, updateLastRoute, updateSessionStore, updateSessionStoreEntry, upsertSessionEntry, warnMissingProviderGroupPolicyFallbackOnce, writeConfigFile };

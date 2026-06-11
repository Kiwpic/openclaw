import type { MsgContext } from "../../auto-reply/templating.js";
import type { DeliveryContext } from "../../utils/delivery-context.types.js";
import { type SessionDiskBudgetSweepResult } from "./disk-budget.js";
import { getSessionStoreCacheVersion } from "./store-cache.js";
import { resolveMaintenanceConfig } from "./store-maintenance-runtime.js";
import { capEntryCount, getActiveSessionMaintenanceWarning, pruneStaleEntries, type QuotaSuspensionMaintenanceResult, type ResolvedSessionMaintenanceConfig, type SessionMaintenanceWarning } from "./store-maintenance.js";
import { type SessionEntry } from "./types.js";
export { clearSessionStoreCacheForTest, drainSessionStoreWriterQueuesForTest, getSessionStoreWriterQueueSizeForTest, } from "./store-writer-state.js";
export { withSessionStoreWriterForTest } from "./store-writer.js";
export { loadSessionStore, readSessionEntries, readSessionEntry, readSessionStoreSnapshot, } from "./store-load.js";
export type { SessionStoreSnapshot, SessionStoreSnapshotEntries, SessionStoreSnapshotEntry, } from "./store-cache.js";
export { normalizeStoreSessionKey, resolveSessionStoreEntry } from "./store-entry.js";
export declare function readSessionUpdatedAt(params: {
    storePath: string;
    sessionKey: string;
}): number | undefined;
export type SessionMaintenanceApplyReport = {
    mode: ResolvedSessionMaintenanceConfig["mode"];
    beforeCount: number;
    afterCount: number;
    pruned: number;
    capped: number;
    diskBudget: SessionDiskBudgetSweepResult | null;
};
export { capEntryCount, getActiveSessionMaintenanceWarning, getSessionStoreCacheVersion, pruneStaleEntries, resolveMaintenanceConfig, };
export type { ResolvedSessionMaintenanceConfig, SessionMaintenanceWarning };
type SaveSessionStoreOptions = {
    /** Skip pruning, capping, and rotation (e.g. during one-time migrations). */
    skipMaintenance?: boolean;
    /** Caller already proved the store serialization is unchanged unless maintenance mutates it. */
    skipSerializeForUnchangedStore?: boolean;
    /** Internal hot paths can hand writer-owned stores to the cache after persistence. */
    takeCacheOwnership?: boolean;
    /** Active session key for warn-only maintenance. */
    activeSessionKey?: string;
    /** Optional callback for warn-only maintenance. */
    onWarn?: (warning: SessionMaintenanceWarning) => void | Promise<void>;
    /** Optional callback with maintenance stats after a save. */
    onMaintenanceApplied?: (report: SessionMaintenanceApplyReport) => void | Promise<void>;
    /** Optional overrides used by maintenance commands. */
    maintenanceOverride?: Partial<ResolvedSessionMaintenanceConfig>;
    /** Fully resolved maintenance settings when the caller already has config loaded. */
    maintenanceConfig?: ResolvedSessionMaintenanceConfig;
    /** Changed top-level entry when a hot path only updated one existing session. */
    singleEntryPersistence?: SingleEntryPersistencePatch;
};
type UpdateSessionStoreOptions<T> = SaveSessionStoreOptions & {
    /**
     * Specialized callers can prove their mutator made no changes through its result.
     * When true, the writer-owned object cache is restored and sessions.json is untouched.
     */
    skipSaveWhenResult?: (result: T) => boolean;
    resolveSingleEntryPersistence?: (result: T) => SingleEntryPersistencePatch | null | undefined;
};
type SingleEntryPersistencePatch = {
    sessionKey: string;
    entry: SessionEntry;
};
type SessionEntryWorkflowOptions = {
    agentId?: string;
    env?: NodeJS.ProcessEnv;
    hydrateSkillPromptRefs?: boolean;
    storePath?: string;
};
export declare function getSessionEntry(options: SessionEntryWorkflowOptions & {
    sessionKey: string;
}): SessionEntry | undefined;
export declare function listSessionEntries(options?: SessionEntryWorkflowOptions): Array<{
    sessionKey: string;
    entry: SessionEntry;
}>;
export declare function saveSessionStore(storePath: string, store: Record<string, SessionEntry>, opts?: SaveSessionStoreOptions): Promise<void>;
export declare function updateSessionStore<T>(storePath: string, mutator: (store: Record<string, SessionEntry>) => Promise<T> | T, opts?: UpdateSessionStoreOptions<T>): Promise<T>;
export declare function runQuotaSuspensionMaintenance(params: {
    storePath: string;
    now?: number;
    ttlMs?: number;
    log?: boolean;
}): Promise<QuotaSuspensionMaintenanceResult>;
export declare function archiveRemovedSessionTranscripts(params: {
    removedSessionFiles: Iterable<[string, string | undefined]>;
    referencedSessionIds: ReadonlySet<string>;
    storePath: string;
    reason: "deleted" | "reset";
    restrictToStoreDir?: boolean;
}): Promise<Set<string>>;
export declare function updateSessionStoreEntry(params: {
    storePath: string;
    sessionKey: string;
    update: (entry: SessionEntry) => Promise<Partial<SessionEntry> | null> | Partial<SessionEntry> | null;
    skipMaintenance?: boolean;
    takeCacheOwnership?: boolean;
}): Promise<SessionEntry | null>;
export declare function applySessionStoreEntryPatch(params: {
    storePath: string;
    sessionKey: string;
    patch: Partial<SessionEntry>;
    skipMaintenance?: boolean;
    takeCacheOwnership?: boolean;
}): Promise<SessionEntry | null>;
export declare function patchSessionEntry(params: SessionEntryWorkflowOptions & {
    sessionKey: string;
    fallbackEntry?: SessionEntry;
    preserveActivity?: boolean;
    replaceEntry?: boolean;
    update: (entry: SessionEntry) => Promise<Partial<SessionEntry> | null> | Partial<SessionEntry> | null;
}): Promise<SessionEntry | null>;
export declare function upsertSessionEntry(params: SessionEntryWorkflowOptions & {
    sessionKey: string;
    entry: SessionEntry;
}): Promise<void>;
export declare function recordSessionMetaFromInbound(params: {
    storePath: string;
    sessionKey: string;
    ctx: MsgContext;
    groupResolution?: import("./types.js").GroupKeyResolution | null;
    createIfMissing?: boolean;
}): Promise<SessionEntry | null>;
export declare function updateLastRoute(params: {
    storePath: string;
    sessionKey: string;
    channel?: SessionEntry["lastChannel"];
    to?: string;
    accountId?: string;
    threadId?: string | number;
    route?: SessionEntry["route"];
    deliveryContext?: DeliveryContext;
    ctx?: MsgContext;
    groupResolution?: import("./types.js").GroupKeyResolution | null;
    createIfMissing?: boolean;
}): Promise<SessionEntry | null>;

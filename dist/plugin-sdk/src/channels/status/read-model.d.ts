import type { ChannelAccountSnapshot } from "../plugins/types.public.js";
export type RuntimeChannelStatusPayload = {
    channelAccounts?: unknown;
};
export type RuntimeChannelAccount = Record<string, unknown>;
/** Reads raw runtime account records for one channel from a gateway payload. */
export declare function getRuntimeChannelAccounts(params: {
    payload: unknown;
    channelId: string;
}): RuntimeChannelAccount[];
/** Normalizes gateway channel account snapshots into a channel-id map. */
export declare function normalizeRuntimeChannelAccountSnapshots(payload: unknown): Map<string, ChannelAccountSnapshot[]>;
/** Resolves a stable account id from runtime status record fallbacks. */
export declare function resolveRuntimeChannelAccountId(account: RuntimeChannelAccount): string;
/** Finds a runtime account, including singleton default-account fallback. */
export declare function findRuntimeChannelAccount(params: {
    liveAccounts: RuntimeChannelAccount[];
    accountId: string;
}): RuntimeChannelAccount | null;
/** Reports whether a runtime account has usable live credentials. */
export declare function hasRuntimeCredentialAvailable(params: {
    liveAccounts: RuntimeChannelAccount[];
    accountId: string;
}): boolean;
/** Converts configured-but-unavailable credential markers to available. */
export declare function markConfiguredUnavailableCredentialStatusesAvailable(account: unknown): Record<string, unknown>;
/** Merges local and runtime accounts into display rows with source metadata. */
export declare function resolveChannelAccountStatusRows(params: {
    localAccountIds: string[];
    runtimeAccounts: ChannelAccountSnapshot[];
    resolveLocalSnapshot: (accountId: string) => Promise<ChannelAccountSnapshot>;
}): Promise<Array<{
    accountId: string;
    snapshot: ChannelAccountSnapshot;
    source: "gateway" | "config";
}>>;

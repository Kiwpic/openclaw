import type { CronConfig } from "../config/types.cron.js";
import type { CronRunLogEntry } from "./run-log-types.js";
import type { CronDeliveryStatus, CronRunStatus } from "./types.js";
export type { CronRunLogEntry } from "./run-log-types.js";
type CronRunLogSortDir = "asc" | "desc";
type CronRunLogStatusFilter = "all" | "ok" | "error" | "skipped";
type ReadCronRunLogPageOptions = {
    limit?: number;
    offset?: number;
    jobId?: string;
    runId?: string;
    status?: CronRunLogStatusFilter;
    statuses?: CronRunStatus[];
    deliveryStatus?: CronDeliveryStatus;
    deliveryStatuses?: CronDeliveryStatus[];
    query?: string;
    sortDir?: CronRunLogSortDir;
};
type CronRunLogPageResult = {
    entries: CronRunLogEntry[];
    total: number;
    offset: number;
    limit: number;
    hasMore: boolean;
    nextOffset: number | null;
};
type ReadCronRunLogAllPageOptions = Omit<ReadCronRunLogPageOptions, "jobId"> & {
    storePath: string;
    jobNameById?: Record<string, string>;
};
type AppendCronRunLogOptions = {
    keepLines?: number | false;
};
/** Returns whether an error came from cron run-log job id validation. */
export declare function isInvalidCronRunLogJobIdError(err: unknown): boolean;
/** Legacy byte cap kept for config parsing compatibility with older file-backed run logs. */
export declare const DEFAULT_CRON_RUN_LOG_MAX_BYTES = 2000000;
/** Default SQLite row retention per cron job when no explicit keepLines value is configured. */
export declare const DEFAULT_CRON_RUN_LOG_KEEP_LINES = 2000;
/** Resolves configured run-log pruning limits while preserving legacy maxBytes parsing. */
export declare function resolveCronRunLogPruneOptions(cfg?: CronConfig["runLog"]): {
    maxBytes: number;
    keepLines: number;
};
/** Exposes the in-process async write queue size for run-log concurrency tests. */
export declare function getPendingCronRunLogWriteCountForTests(): number;
/** Appends a cron run-log row and serializes writes per store/job before pruning old rows. */
export declare function appendCronRunLog(params: {
    storePath: string;
    entry: CronRunLogEntry;
    opts?: AppendCronRunLogOptions;
}): Promise<void>;
/** Reads recent run-log entries in chronological order after draining pending async writes. */
export declare function readCronRunLogEntries(params: {
    storePath: string;
    jobId?: string;
    limit?: number;
}): Promise<CronRunLogEntry[]>;
/** Reads recent run-log entries synchronously for startup/task reconciliation paths. */
export declare function readCronRunLogEntriesSync(params: {
    storePath: string;
    jobId?: string;
    limit?: number;
}): CronRunLogEntry[];
/** Reads a bounded, filterable run-log page for CLI and UI list views. */
export declare function readCronRunLogEntriesPage(opts: ReadCronRunLogPageOptions & {
    storePath: string;
    jobNameById?: Record<string, string>;
}): Promise<CronRunLogPageResult>;
/** Reads a run-log page across all jobs for a specific cron store. */
export declare function readCronRunLogEntriesPageAll(opts: ReadCronRunLogAllPageOptions): Promise<CronRunLogPageResult>;

import type { CronJob } from "../../../cron/types.js";
export type CronLegacyIssueCounts = Partial<Record<string, number>>;
export type CronLegacyIssueDetails = {
    unresolvedAgentTurnShellToolPrompt?: string[];
};
/** Convert legacy cron issue counts into doctor preview lines. */
export declare function formatLegacyIssuePreview(issues: CronLegacyIssueCounts, details?: CronLegacyIssueDetails): string[];
/** Merge legacy JSON jobs into current jobs without duplicating matching ids/jobIds. */
export declare function mergeLegacyCronJobs(params: {
    currentJobs: Array<Record<string, unknown>>;
    legacyJobs: Array<Record<string, unknown>>;
}): {
    jobs: Array<Record<string, unknown>>;
    importedCount: number;
};
/** Attach runtime SQLite state columns back onto a config-defined cron job row. */
export declare function mergeRuntimeEntryIntoConfigJob(params: {
    job: Record<string, unknown>;
    runtimeEntry?: {
        updatedAtMs?: number;
        state?: Record<string, unknown>;
    };
}): Record<string, unknown>;
/** Return true when a SQLite cron projection row no longer matches config JSON. */
export declare function needsSqliteProjectionBackfill(params: {
    configJob: Record<string, unknown>;
    projectedJob?: CronJob;
}): boolean;

/** Marks a cron job id as currently executing for duplicate-run suppression. */
export declare function markCronJobActive(jobId: string): void;
/** Clears the active marker when a cron run exits or is abandoned. */
export declare function clearCronJobActive(jobId: string): void;
/** Returns whether the given cron job id is currently executing in this process. */
export declare function isCronJobActive(jobId: string): boolean;
/** Returns whether any cron run is active in this process. */
export declare function hasActiveCronJobs(): boolean;
/** Clears process-global cron active-job state between tests. */
export declare function resetCronActiveJobsForTests(): void;

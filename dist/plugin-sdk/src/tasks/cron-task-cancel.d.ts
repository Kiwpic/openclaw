export declare function registerActiveCronTaskRun(params: {
    runId: string | undefined;
    controller: AbortController;
    onCancel?: (reason: string) => void;
}): (() => void) | undefined;
export declare function cancelActiveCronTaskRun(params: {
    runId: string | undefined;
    reason?: string;
}): boolean;
export declare function resetActiveCronTaskRunsForTests(): void;

/**
 * Waits for compaction retry completion with an aggregate timeout so a lost
 * retry resolution cannot hold the session lane indefinitely.
 */
export declare function waitForCompactionRetryWithAggregateTimeout(params: {
    waitForCompactionRetry: () => Promise<void>;
    abortable: <T>(promise: Promise<T>) => Promise<T>;
    aggregateTimeoutMs: number;
    onTimeout?: () => void;
    isCompactionStillInFlight?: () => boolean;
}): Promise<{
    timedOut: boolean;
}>;

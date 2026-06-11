/** Runs one rate-limit attempt after prior attempts for the same IP/scope finish. */
export declare function withSerializedRateLimitAttempt<T>(params: {
    ip: string | undefined;
    scope: string | undefined;
    run: () => Promise<T>;
}): Promise<T>;

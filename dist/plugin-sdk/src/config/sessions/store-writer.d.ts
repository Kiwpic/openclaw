/** Runs a callback under the same per-store writer queue used in production. */
export declare function withSessionStoreWriterForTest<T>(storePath: string, fn: () => Promise<T>): Promise<T>;
export declare function runExclusiveSessionStoreWrite<T>(storePath: string, fn: () => Promise<T>): Promise<T>;

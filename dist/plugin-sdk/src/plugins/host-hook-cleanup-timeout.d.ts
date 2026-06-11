/** Max time allowed for plugin host cleanup hooks before failing shutdown. */
export declare const PLUGIN_HOST_CLEANUP_TIMEOUT_MS = 5000;
/** Error raised when a plugin host cleanup hook exceeds the shutdown timeout. */
export declare class PluginHostCleanupTimeoutError extends Error {
    constructor(hookId: string);
}
/** Runs plugin host cleanup with a bounded timeout and clears the timer afterward. */
export declare function withPluginHostCleanupTimeout<T>(hookId: string, cleanup: () => T | Promise<T>): Promise<T>;

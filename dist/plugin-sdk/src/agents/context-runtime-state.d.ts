/**
 * Process-global context-window runtime state.
 * Keeps model-config loads, backoff counters, and token cache reset behavior
 * shared across module reloads and runtime seams.
 */
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { type LazyPromiseLoader } from "../shared/lazy-promise.js";
type ContextWindowRuntimeState = {
    loadPromise: Promise<void> | null;
    configuredConfig: OpenClawConfig | undefined;
    configLoadFailures: number;
    nextConfigLoadAttemptAtMs: number;
    modelsConfigRuntimeLoader: LazyPromiseLoader<typeof import("./models-config.runtime.js")>;
};
/** Shared mutable state for context-window resolution and model config loading. */
export declare const CONTEXT_WINDOW_RUNTIME_STATE: ContextWindowRuntimeState;
/** Reset context-window runtime state and token cache for isolated tests. */
export declare function resetContextWindowCacheForTest(): void;
export {};

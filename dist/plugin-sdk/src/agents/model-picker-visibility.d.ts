import type { OpenClawConfig } from "../config/types.openclaw.js";
/** Creates a provider visibility predicate for model picker rendering. */
export declare function createModelPickerVisibleProviderPredicate(params?: {
    config?: OpenClawConfig;
    env?: NodeJS.ProcessEnv;
    includeSetupRegistry?: boolean;
}): (provider: string) => boolean;
/** Returns whether a provider id should appear in the model picker. */
export declare function isModelPickerVisibleProvider(provider: string): boolean;
/** Returns whether a provider/model ref should appear in the model picker. */
export declare function isModelPickerVisibleModelRef(ref: string): boolean;

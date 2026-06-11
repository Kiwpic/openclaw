import { resolveModelAsync } from "../agents/embedded-agent-runner/model.js";
import { getApiKeyForModel, requireApiKey } from "../agents/model-auth.js";
import { prepareModelForSimpleCompletion } from "../agents/simple-completion-transport.js";
import type { OpenClawConfig } from "../config/types.js";
import { completeSimple } from "../llm/stream.js";
import type { ResolvedTtsConfig } from "./tts-types.js";
export { normalizeApplyTextNormalization, normalizeLanguageCode, normalizeSeed, requireInRange, scheduleCleanup, } from "./tts-provider-helpers.js";
type SummarizeTextDeps = {
    completeSimple: typeof completeSimple;
    getApiKeyForModel: typeof getApiKeyForModel;
    prepareModelForSimpleCompletion: typeof prepareModelForSimpleCompletion;
    requireApiKey: typeof requireApiKey;
    resolveModelAsync: typeof resolveModelAsync;
};
type SummarizeResult = {
    summary: string;
    latencyMs: number;
    inputLength: number;
    outputLength: number;
};
/** Summarize long text before synthesis using the configured summary model. */
export declare function summarizeText(params: {
    text: string;
    targetLength: number;
    cfg: OpenClawConfig;
    config: ResolvedTtsConfig;
    timeoutMs: number;
}, deps?: SummarizeTextDeps): Promise<SummarizeResult>;

import type { ModelFallbackResultClassification } from "../model-fallback.js";
/** Returns a fallback classification when an embedded run failed without user-visible output. */
export declare function classifyEmbeddedAgentRunResultForModelFallback(params: {
    provider: string;
    model: string;
    result: unknown;
    hasDirectlySentBlockReply?: boolean;
    hasBlockReplyPipelineOutput?: boolean;
}): ModelFallbackResultClassification;

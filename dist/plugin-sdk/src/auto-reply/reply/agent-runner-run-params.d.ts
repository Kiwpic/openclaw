import type { resolveProviderScopedAuthProfile } from "./agent-runner-auth-profile.js";
import type { FollowupRun } from "./queue.js";
/** Callback used to detect providers that require final-answer tags. */
export type ReasoningTagProviderResolver = (provider: string, options: {
    config: FollowupRun["run"]["config"];
    workspaceDir: string;
    modelId: string;
}) => boolean;
/** Resolves whether a provider/model run should enforce final-answer tags. */
export declare const resolveEnforceFinalTagWithResolver: (run: FollowupRun["run"], provider: string, model?: string, isReasoningTagProvider?: ReasoningTagProviderResolver) => boolean;
/** Builds model fallback options for an embedded follow-up run. */
export declare function resolveModelFallbackOptions(run: FollowupRun["run"], configOverride?: FollowupRun["run"]["config"]): {
    cfg: import("../../config/types.openclaw.ts").OpenClawConfig;
    provider: string;
    model: string;
    agentDir: string;
    agentId: string;
    sessionKey: string | undefined;
    fallbacksOverride: string[] | undefined;
};
/** Builds the shared embedded-agent run params from a queued follow-up run. */
export declare function buildEmbeddedRunBaseParams(params: {
    run: FollowupRun["run"];
    provider: string;
    model: string;
    runId: string;
    promptCacheKey?: string;
    authProfile: ReturnType<typeof resolveProviderScopedAuthProfile>;
    allowTransientCooldownProbe?: boolean;
    isReasoningTagProvider?: ReasoningTagProviderResolver;
}): {
    authProfileId?: string;
    authProfileIdSource?: "auto" | "user";
    sessionFile: string;
    workspaceDir: string;
    cwd: string | undefined;
    agentDir: string;
    config: import("../../config/types.openclaw.ts").OpenClawConfig;
    skillsSnapshot: import("../../skills/types.ts").SkillSnapshot | undefined;
    ownerNumbers: string[] | undefined;
    inputProvenance: import("../../sessions/input-provenance.ts").InputProvenance | undefined;
    senderIsOwner: boolean | undefined;
    enforceFinalTag: boolean;
    silentExpected: boolean | undefined;
    allowEmptyAssistantReplyAsSilent: boolean | undefined;
    silentReplyPromptMode: import("../../agents/system-prompt.types.ts").SilentReplyPromptMode | undefined;
    sourceReplyDeliveryMode: import("../get-reply-options.types.ts").SourceReplyDeliveryMode | undefined;
    provider: string;
    model: string;
    modelFallbacksOverride: string[] | undefined;
    thinkLevel: import("./directives.ts").ThinkLevel | undefined;
    verboseLevel: import("./directives.ts").VerboseLevel | undefined;
    reasoningLevel: import("./directives.ts").ReasoningLevel | undefined;
    execOverrides: Pick<import("../../agents/bash-tools.exec-types.ts").ExecToolDefaults, "ask" | "host" | "node" | "security"> | undefined;
    bashElevated: {
        enabled: boolean;
        allowed: boolean;
        defaultLevel: import("./directives.ts").ElevatedLevel;
    } | undefined;
    timeoutMs: number;
    runId: string;
    promptCacheKey: string | undefined;
    allowTransientCooldownProbe: boolean | undefined;
};

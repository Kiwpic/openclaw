import type { ApplyAuthChoiceParams, ApplyAuthChoiceResult } from "./auth-choice.apply.types.js";
import type { AuthChoice } from "./onboard-types.js";
/** Translate generic api-key/token choices to provider-specific auth choices when possible. */
export declare function normalizeApiKeyTokenProviderAuthChoice(params: {
    authChoice: AuthChoice;
    tokenProvider?: string;
    config?: ApplyAuthChoiceParams["config"];
    workspaceDir?: string;
    env?: NodeJS.ProcessEnv;
}): AuthChoice;
/** Reserved extension point for historical api-provider auth application flows. */
export declare function applyAuthChoiceApiProviders(_params: ApplyAuthChoiceParams): Promise<ApplyAuthChoiceResult | null>;

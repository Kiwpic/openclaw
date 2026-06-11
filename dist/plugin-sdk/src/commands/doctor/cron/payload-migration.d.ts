type UnknownRecord = Record<string, unknown>;
/** Return true when a cron payload contains legacy `openai-codex/*` model refs. */
export declare function hasLegacyOpenAICodexCronModelRef(payload: UnknownRecord): boolean;
/** Normalize legacy cron payload channel/provider and model reference fields in place. */
export declare function migrateLegacyCronPayload(payload: UnknownRecord): boolean;
export declare function migrateLegacyAgentTurnCommandPayload(payload: UnknownRecord): boolean;
export declare function hasUnresolvedAgentTurnShellToolPrompt(payload: UnknownRecord): boolean;
export {};

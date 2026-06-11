import type { ProviderAuthEvidence, ProviderAuthLookupMaps, ProviderEnvVarLookupParams } from "../secrets/provider-env-vars.js";
/** Returns provider-to-env-var candidates for API-key style auth lookup. */
export declare function resolveProviderEnvApiKeyCandidates(params?: ProviderEnvVarLookupParams): Record<string, readonly string[]>;
/** Returns provider auth evidence that may come from env vars, files, or plugin manifests. */
export declare function resolveProviderEnvAuthEvidence(params?: ProviderEnvVarLookupParams): Record<string, readonly ProviderAuthEvidence[]>;
/** Resolves both env-var candidates and richer auth evidence from one manifest snapshot. */
export declare function resolveProviderEnvAuthLookupMaps(params?: ProviderEnvVarLookupParams): ProviderAuthLookupMaps;
/** Lists every provider key represented by either env candidates or auth evidence. */
export declare function listProviderEnvAuthLookupKeys(params: {
    envCandidateMap: Readonly<Record<string, readonly string[]>>;
    authEvidenceMap: Readonly<Record<string, readonly ProviderAuthEvidence[]>>;
}): string[];
/** Resolves provider auth lookup maps and returns their sorted provider keys. */
export declare function resolveProviderEnvAuthLookupKeys(params?: ProviderEnvVarLookupParams): string[];
/** Lists known provider API-key env var names for redaction and marker matching. */
export declare function listKnownProviderEnvApiKeyNames(): string[];

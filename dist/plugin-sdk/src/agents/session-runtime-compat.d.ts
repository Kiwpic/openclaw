import type { SessionEntry } from "../config/sessions.js";
/** Persisted runtime fields used to recover session runtime compatibility. */
export type SessionRuntimeCompatEntry = Pick<SessionEntry, "agentHarnessId" | "agentRuntimeOverride">;
/** Resolves the persisted runtime id, preferring explicit overrides. */
export declare function resolvePersistedSessionRuntimeId(entry?: SessionRuntimeCompatEntry): string | undefined;
/** Resolves whether a session runtime override applies to the selected provider. */
export declare function resolveSessionRuntimeOverrideForProvider(params: {
    provider: string;
    entry?: Pick<SessionEntry, "agentRuntimeOverride">;
}): string | undefined;
/** Resolves the context config provider for a persisted session runtime route. */
export declare function resolveContextConfigProviderForSessionRuntime(params: {
    provider: string;
    entry?: SessionRuntimeCompatEntry;
}): string | undefined;

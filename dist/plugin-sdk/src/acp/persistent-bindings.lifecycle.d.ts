import type { OpenClawConfig } from "../config/types.openclaw.js";
import { type ConfiguredAcpBindingSpec, type ResolvedConfiguredAcpBinding } from "./persistent-bindings.types.js";
/** Creates or replaces the ACP session required by one configured binding. */
export declare function ensureConfiguredAcpBindingSession(params: {
    cfg: OpenClawConfig;
    spec: ConfiguredAcpBindingSpec;
}): Promise<{
    ok: true;
    sessionKey: string;
} | {
    ok: false;
    sessionKey: string;
    error: string;
}>;
/** Resolves a configured binding for a conversation and ensures its ACP session exists. */
export declare function ensureConfiguredAcpBindingReady(params: {
    cfg: OpenClawConfig;
    configuredBinding: ResolvedConfiguredAcpBinding | null;
}): Promise<{
    ok: true;
} | {
    ok: false;
    error: string;
}>;
/** Resets a configured ACP binding session without changing the bound conversation key. */
export declare function resetAcpSessionInPlace(params: {
    cfg: OpenClawConfig;
    sessionKey: string;
    reason: "new" | "reset";
    clearMeta?: boolean;
}): Promise<{
    ok: true;
} | {
    ok: false;
    skipped?: boolean;
    error?: string;
}>;

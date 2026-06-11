import { i as OpenClawConfig } from "./types.openclaw-BnYC9Nsr.js";
import { n as ResolvedConfiguredAcpBinding, t as resolveConfiguredAcpBindingRecord } from "./persistent-bindings.resolve-BNo9OKg3.js";

//#region src/acp/persistent-bindings.lifecycle.d.ts
/** Resolves a configured binding for a conversation and ensures its ACP session exists. */
declare function ensureConfiguredAcpBindingReady(params: {
  cfg: OpenClawConfig;
  configuredBinding: ResolvedConfiguredAcpBinding | null;
}): Promise<{
  ok: true;
} | {
  ok: false;
  error: string;
}>;
//#endregion
export { ensureConfiguredAcpBindingReady, resolveConfiguredAcpBindingRecord };
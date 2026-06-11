import type { OpenClawConfig } from "./types.js";
/** Collects config env vars safe to inject into runtime process environments. */
export declare function collectConfigRuntimeEnvVars(cfg?: OpenClawConfig): Record<string, string>;
/** Collects config env vars safe to persist into managed service environments. */
export declare function collectConfigServiceEnvVars(cfg?: OpenClawConfig): Record<string, string>;
/** Builds a cloned environment with config env vars applied without mutating the base env. */
export declare function createConfigRuntimeEnv(cfg: OpenClawConfig, baseEnv?: NodeJS.ProcessEnv): NodeJS.ProcessEnv;
/** Applies config env vars to an environment without overwriting existing non-empty values. */
export declare function applyConfigEnvVars(cfg: OpenClawConfig, env?: NodeJS.ProcessEnv): void;

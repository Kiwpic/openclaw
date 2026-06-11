import type { OpenClawConfig } from "../config/types.openclaw.js";
/** Applies an agent default primary model and reports whether config changed. */
export declare function applyAgentDefaultPrimaryModel(params: {
    cfg: OpenClawConfig;
    model: string;
    legacyModels?: Set<string>;
}): {
    next: OpenClawConfig;
    changed: boolean;
};
/** Applies a primary model to agent defaults while preserving model fallback metadata. */
export declare function applyPrimaryModel(cfg: OpenClawConfig, model: string): OpenClawConfig;

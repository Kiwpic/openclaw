import { type BundledSkillsResolveOptions } from "./bundled-dir.js";
/** Bundled skill path context resolved from runtime defaults. */
export type BundledSkillsContext = {
    dir?: string;
    names: Set<string>;
};
export declare function resolveBundledSkillsContext(opts?: BundledSkillsResolveOptions): BundledSkillsContext;

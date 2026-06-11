import type { SourceInfo } from "../../agents/sessions/source-info.js";
export type SourceScope = "user" | "project" | "temporary";
export type SourceOrigin = "package" | "top-level";
export interface Skill {
    name: string;
    description: string;
    filePath: string;
    baseDir: string;
    /** Deterministic marker for the SKILL.md content rendered as <version>. */
    promptVersion?: string;
    sourceInfo: SourceInfo;
    disableModelInvocation: boolean;
    source: string;
}
export declare function createSyntheticSourceInfo(path: string, options: {
    source: string;
    scope?: SourceScope;
    origin?: SourceOrigin;
    baseDir?: string;
}): SourceInfo;
/**
 * Keep this formatter's XML layout byte-for-byte aligned with the upstream
 * Agent Skills formatter so we can avoid importing the full session runtime
 * package root on the cold skills path. Visibility policy is applied upstream
 * before calling this helper.
 */
export declare function formatSkillsForPrompt(skills: Skill[]): string;

import type { SkillEntry } from "../types.js";
/** Indexed skill metadata used for runtime visibility and command lookup. */
export type SkillIndexEntry = {
    entry: SkillEntry;
    name: string;
    normalizedName: string;
    skillKey: string;
    normalizedSkillKey: string;
    source: string;
    bundled: boolean;
    agentAllowed: boolean;
    runtimeVisible: boolean;
    promptVisible: boolean;
    userInvocable: boolean;
};
export type SkillIndex = {
    entries: SkillIndexEntry[];
    runtimeEntries: SkillEntry[];
    promptVisibleEntries: SkillEntry[];
    userInvocableEntries: SkillEntry[];
    byName: ReadonlyMap<string, SkillIndexEntry>;
    byNormalizedName: ReadonlyMap<string, readonly SkillIndexEntry[]>;
};
export type BuildSkillIndexOptions = {
    bundledNames?: ReadonlySet<string>;
    agentSkillFilter?: readonly string[];
};
/** Normalizes a skill name to the comparable key used by filters and commands. */
export declare function normalizeSkillIndexName(value: string): string;
export declare function isSkillRuntimeVisible(entry: SkillEntry): boolean;
export declare function isSkillPromptVisible(entry: SkillEntry): boolean;
export declare function isSkillUserInvocable(entry: SkillEntry): boolean;
export declare function filterPromptVisibleSkillEntries(entries: readonly SkillEntry[]): SkillEntry[];
export declare function filterUserInvocableSkillEntries(entries: readonly SkillEntry[]): SkillEntry[];
export declare function buildSkillIndexEntries(entries: readonly SkillEntry[], opts?: BuildSkillIndexOptions): SkillIndexEntry[];
export declare function buildSkillIndex(entries: readonly SkillEntry[], opts?: BuildSkillIndexOptions): SkillIndex;

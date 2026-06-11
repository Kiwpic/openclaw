import { type SkillProposalManifest, type SkillProposalReadResult, type SkillProposalRecord, type SkillProposalRollback, type SkillProposalSupportFile, type SkillProposalSupportFileInput } from "./types.js";
/** Maximum bytes accepted for a proposal draft. */
export declare const MAX_PROPOSAL_BYTES: number;
export declare const MAX_PROPOSAL_SUPPORT_FILE_BYTES: number;
export declare const MAX_PROPOSAL_SUPPORT_FILES = 64;
export declare const MAX_PROPOSAL_SUPPORT_FILES_TOTAL_BYTES: number;
type SkillWorkshopStoreOptions = {
    env?: NodeJS.ProcessEnv;
    stateDir?: string;
};
export type PreparedSkillProposalSupportFile = SkillProposalSupportFile & {
    content: string;
};
type SkillProposalWriteGuard = (manifest: SkillProposalManifest) => Promise<void> | void;
/** Creates a stable proposal id from skill name, date, and random suffix. */
export declare function createSkillProposalId(name: string, now?: Date): string;
export declare function hashSkillProposalContent(content: string): string;
export declare function assertSkillProposalContentSize(content: string): void;
export declare function resolveWorkshopPath(options?: SkillWorkshopStoreOptions): string;
export declare function resolveProposalDir(proposalId: string, options?: SkillWorkshopStoreOptions): string;
export declare function resolveProposalRecordPath(proposalId: string, options?: SkillWorkshopStoreOptions): string;
export declare function resolveProposalDraftPath(proposalId: string, options?: SkillWorkshopStoreOptions): string;
export declare function normalizeSkillProposalSupportPath(input: string): string;
export declare function prepareSkillProposalSupportFiles(input: readonly SkillProposalSupportFileInput[] | undefined): PreparedSkillProposalSupportFile[];
export declare function resolveSkillProposalTarget(params: {
    workspaceDir: string;
    skillName: string;
}): {
    skillKey: string;
    skillDir: string;
    skillFile: string;
};
export declare function readSkillProposal(proposalId: string, options?: SkillWorkshopStoreOptions): Promise<SkillProposalReadResult | null>;
export declare function readSkillProposalRecord(proposalId: string, options?: SkillWorkshopStoreOptions): Promise<SkillProposalRecord | null>;
export declare function writeSkillProposal(params: {
    record: SkillProposalRecord;
    content: string;
    supportFiles?: readonly PreparedSkillProposalSupportFile[];
    beforeWrite?: SkillProposalWriteGuard;
    store?: SkillWorkshopStoreOptions;
}): Promise<void>;
export declare function replaceSkillProposalDraft(params: {
    record: SkillProposalRecord;
    previousSupportFiles?: readonly SkillProposalSupportFile[];
    content: string;
    supportFiles?: readonly PreparedSkillProposalSupportFile[];
    store?: SkillWorkshopStoreOptions;
}): Promise<void>;
export declare function updateSkillProposalRecord(params: {
    record: SkillProposalRecord;
    store?: SkillWorkshopStoreOptions;
}): Promise<void>;
export declare function withSkillProposalTargetLock<T>(record: SkillProposalRecord, fn: () => Promise<T>, options?: SkillWorkshopStoreOptions): Promise<T>;
export declare function writeSkillProposalRollback(params: {
    proposalId: string;
    rollback: SkillProposalRollback;
    store?: SkillWorkshopStoreOptions;
}): Promise<void>;
export declare function readSkillProposalManifest(options?: SkillWorkshopStoreOptions): Promise<SkillProposalManifest>;
export declare function refreshSkillProposalManifest(options?: SkillWorkshopStoreOptions): Promise<SkillProposalManifest>;
export declare function readWorkspaceSkillFile(filePath: string): Promise<string | null>;
export declare function readProposalSupportFiles(record: SkillProposalRecord, options?: SkillWorkshopStoreOptions): Promise<PreparedSkillProposalSupportFile[]>;
export declare function readWorkspaceSupportFile(params: {
    skillDir: string;
    relativePath: string;
}): Promise<string | null>;
export declare function writeWorkspaceSkillFile(params: {
    workspaceDir: string;
    filePath: string;
    content: string;
    overwrite?: boolean;
}): Promise<void>;
export declare function writeWorkspaceSupportFile(params: {
    skillDir: string;
    relativePath: string;
    content: string;
    overwrite?: boolean;
}): Promise<void>;
export declare function removeWorkspaceSupportFile(params: {
    skillDir: string;
    relativePath: string;
}): Promise<void>;
export declare function createSkillProposalRollback(params: {
    proposalId: string;
    targetSkillFile: string;
    action: "create" | "update";
    previousContent?: string;
    supportFiles?: SkillProposalRollback["supportFiles"];
}): SkillProposalRollback;
export declare function assertInsideWorkspace(workspaceDir: string, targetPath: string, label: string): void;
export declare function assertProposalId(proposalId: string): void;
export {};

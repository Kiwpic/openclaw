export interface SessionCwdIssue {
    sessionFile?: string;
    sessionCwd: string;
    fallbackCwd: string;
}
interface SessionCwdSource {
    getCwd(): string;
    getSessionFile(): string | undefined;
}
/** Returns a cwd issue for persisted sessions whose stored cwd has disappeared. */
export declare function getMissingSessionCwdIssue(sessionManager: SessionCwdSource, fallbackCwd: string): SessionCwdIssue | undefined;
/** Formats the terminal error shown when resume cannot safely use the stored cwd. */
export declare function formatMissingSessionCwdError(issue: SessionCwdIssue): string;
/** Formats the compact prompt used when the user can choose the fallback cwd. */
export declare function formatMissingSessionCwdPrompt(issue: SessionCwdIssue): string;
/** Error wrapper that preserves the missing-cwd facts for UI and recovery code. */
export declare class MissingSessionCwdError extends Error {
    readonly issue: SessionCwdIssue;
    constructor(issue: SessionCwdIssue);
}
/** Throws when a persisted session cwd is missing and the caller does not handle prompts. */
export declare function assertSessionCwdExists(sessionManager: SessionCwdSource, fallbackCwd: string): void;
export {};

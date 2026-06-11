/**
 * Placeholder for blank user messages.
 * Preserves the user turn so strict providers that require at least one user
 * message do not reject the transcript.
 */
export declare const BLANK_USER_FALLBACK_TEXT = "(continue)";
export declare const CORRUPTED_IMAGE_FALLBACK_TEXT = "[image omitted: corrupted base64 payload]";
type RepairReport = {
    repaired: boolean;
    droppedLines: number;
    rewrittenAssistantMessages?: number;
    droppedBlankUserMessages?: number;
    rewrittenUserMessages?: number;
    removedCorruptedImageBlocks?: number;
    insertedToolResults?: number;
    backupPath?: string;
    reason?: string;
};
/** Repair a persisted session JSONL file in place when replay-breaking corruption is found. */
export declare function repairSessionFileIfNeeded(params: {
    sessionFile: string;
    debug?: (message: string) => void;
    warn?: (message: string) => void;
}): Promise<RepairReport>;
export {};

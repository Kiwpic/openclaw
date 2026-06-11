export type FinalTagMatch = {
    index: number;
    text: string;
    isClose: boolean;
    isSelfClosing: boolean;
};
/** Parses a candidate `<final>` tag while rejecting lookalike names and malformed attributes. */
export declare function parseFinalTag(text: string): Omit<FinalTagMatch, "index" | "text"> | null;
/** Finds valid `<final>` control tags so callers can strip only actual model markers. */
export declare function findFinalTagMatches(text: string): FinalTagMatch[];
/** Returns true when text contains at least one valid `<final>` control tag. */
export declare function containsFinalTag(text: string): boolean;
/** Removes valid `<final>` tags while preserving their enclosed visible answer text. */
export declare function stripFinalTags(text: string): string;

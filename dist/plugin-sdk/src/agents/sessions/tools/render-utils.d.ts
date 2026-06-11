import type { ImageContent, TextContent } from "../../../llm/types.js";
import type { Theme } from "../../modes/interactive/theme/theme.js";
/** Shortens paths under the current home directory for display. */
export declare function shortenPath(path: unknown): string;
/** Returns a display string for string/nullish values, or null for unsupported values. */
export declare function str(value: unknown): string | null;
/** Replaces tabs with stable spaces so terminal layout does not shift by tab stop. */
export declare function replaceTabs(text: string): string;
/** Normalizes raw terminal output before display. */
export declare function normalizeDisplayText(text: string): string;
/** Extracts text output and image placeholders from a tool result. */
export declare function getTextOutput(result: {
    content: Array<{
        type: string;
        text?: string;
        data?: string;
        mimeType?: string;
    }>;
} | undefined, showImages: boolean): string;
/** Minimal shape shared by renderers that carry typed tool details. */
export type ToolRenderResultLike<TDetails> = {
    content: (TextContent | ImageContent)[];
    details: TDetails;
};
/** Formats the invalid-argument marker with the active theme. */
export declare function invalidArgText(theme: Pick<Theme, "fg">): string;

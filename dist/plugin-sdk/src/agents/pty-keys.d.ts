/** Bracketed-paste prefix emitted before pasted text. */
export declare const BRACKETED_PASTE_START = "\u001B[200~";
/** Bracketed-paste suffix emitted after pasted text. */
export declare const BRACKETED_PASTE_END = "\u001B[201~";
type KeyEncodingRequest = {
    keys?: string[];
    hex?: string[];
    literal?: string;
};
type KeyEncodingResult = {
    data: string;
    warnings: string[];
};
/** True when request keys depend on normal vs application cursor-key mode. */
export declare function hasCursorModeSensitiveKeys(request: KeyEncodingRequest): boolean;
/** Encodes literal, hex, and named key tokens into one PTY input string. */
export declare function encodeKeySequence(request: KeyEncodingRequest, cursorKeyMode?: "normal" | "application"): KeyEncodingResult;
/** Wraps pasted text in bracketed-paste markers when enabled. */
export declare function encodePaste(text: string, bracketed?: boolean): string;
export {};

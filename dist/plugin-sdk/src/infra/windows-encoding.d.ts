/** Extracts a Windows console code page number from localized `chcp` output. */
export declare function parseWindowsCodePage(raw: string): number | null;
/** Resolves and caches the current Windows console encoding for subprocess output. */
export declare function resolveWindowsConsoleEncoding(): string | null;
/** Decodes one complete subprocess output buffer, preferring valid UTF-8 before legacy code pages. */
export declare function decodeWindowsOutputBuffer(params: {
    buffer: Buffer;
    platform?: NodeJS.Platform;
    windowsEncoding?: string | null;
}): string;
/** Creates a streaming decoder for subprocess output chunks that may split multibyte characters. */
export declare function createWindowsOutputDecoder(params?: {
    platform?: NodeJS.Platform;
    windowsEncoding?: string | null;
}): {
    decode(chunk: Buffer | string): string;
    flush(): string;
};

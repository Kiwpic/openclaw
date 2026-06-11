/** Detects supported image MIME types from leading file bytes. */
export declare function detectSupportedImageMimeType(buffer: Uint8Array): string | null;
/** Reads a bounded prefix from disk and detects its supported image MIME type. */
export declare function detectSupportedImageMimeTypeFromFile(filePath: string): Promise<string | null>;

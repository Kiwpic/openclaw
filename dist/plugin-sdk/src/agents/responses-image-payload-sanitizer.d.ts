/** Sanitize inline image fields inside a Responses API payload. */
export declare function sanitizeResponsesImagePayload<T extends Record<string, unknown>>(params: T): T;
/** Sanitize one inline image data URL for Responses payload use. */
export declare function sanitizeInlineImageDataUrl(imageUrl: string): string | undefined;

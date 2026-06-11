/** Plain text segment accepted by embedding providers. */
export type EmbeddingInputTextPart = {
    type: "text";
    text: string;
};
/** Base64 inline payload segment for multimodal embedding providers. */
export type EmbeddingInputInlineDataPart = {
    type: "inline-data";
    mimeType: string;
    data: string;
};
/** Provider-neutral embedding input part. */
export type EmbeddingInputPart = EmbeddingInputTextPart | EmbeddingInputInlineDataPart;
/** Embedding input preserving legacy text plus optional structured parts. */
export type EmbeddingInput = {
    text: string;
    parts?: EmbeddingInputPart[];
};
/** Build a text-only embedding input while keeping callers on the structured API. */
export declare function buildTextEmbeddingInput(text: string): EmbeddingInput;
/** Return true when an embedding request needs multimodal provider support. */
export declare function hasNonTextEmbeddingParts(input: EmbeddingInput | undefined): boolean;

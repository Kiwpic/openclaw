/**
 * Minimal HTML entity decoding helpers.
 *
 * Syntax highlighting and terminal renderers use this to decode the small
 * entity subset emitted by trusted HTML producers without parsing full HTML.
 */
/** Decoded entity text plus the source length consumed from the input. */
export interface DecodedHtmlEntity {
    text: string;
    length: number;
}
/** Decodes a named or numeric HTML entity without the surrounding `&`/`;`. */
export declare function decodeHtmlEntity(entity: string): string | undefined;
/** Decodes an entity starting at `index` in an HTML string. */
export declare function decodeHtmlEntityAt(html: string, index: number): DecodedHtmlEntity | undefined;

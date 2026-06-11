/**
 * Small normalization helpers shared by gateway request handlers.
 */
export { asOptionalRecord as asRecord } from "../../../packages/normalization-core/src/record-coerce.js";
/** Returns a non-empty trimmed string, or `undefined` for non-string input. */
export declare function normalizeTrimmedString(value: unknown): string | undefined;

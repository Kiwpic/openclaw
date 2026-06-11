/**
 * Shared metric extraction helpers for Talk event diagnostics and logging.
 *
 * Talk event payloads are provider-owned JSON blobs, so callers must coerce
 * records and read only bounded numeric counters that are safe to export.
 */
/** Coerce unknown Talk event payloads into optional records for metric reads. */
export { asOptionalRecord as talkEventPayloadRecord } from "../../packages/normalization-core/src/record-coerce.js";
/** Read the first non-negative finite number from a provider payload record. */
export declare function firstFiniteTalkEventNumber(record: Record<string, unknown> | undefined, keys: readonly string[]): number | undefined;

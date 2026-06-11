/**
 * Privacy-preserving Talk diagnostic event projection.
 *
 * The diagnostic stream needs timing and size counters for reliability work,
 * but must not export raw provider payloads, transcripts, or audio content.
 */
import { type DiagnosticEventInput } from "../infra/diagnostic-events.js";
import type { TalkEvent } from "./talk-events.js";
type TalkDiagnosticEventInput = Extract<DiagnosticEventInput, {
    type: "talk.event";
}>;
/** Convert a Talk event into the bounded diagnostic payload shape. */
export declare function createTalkDiagnosticEvent(event: TalkEvent): TalkDiagnosticEventInput;
/** Emit a trusted internal diagnostic event for one Talk event. */
export declare function recordTalkDiagnosticEvent(event: TalkEvent): void;
export {};

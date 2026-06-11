import type { OpenClawConfig } from "../../../config/types.openclaw.js";
/** Warn when visible-reply policy selects message_tool but message is unavailable. */
export declare function collectVisibleReplyToolPolicyWarnings(cfg: OpenClawConfig): string[];
/** Warn when routed channel agents lack the message tool required for channel actions. */
export declare function collectChannelBoundMessageToolPolicyWarnings(cfg: OpenClawConfig): string[];
/** Warn when configured tool sections no longer widen restrictive tool profiles. */
export declare function collectProfileConfiguredToolSectionWarnings(cfg: OpenClawConfig): string[];
export type DoctorPreviewNotes = {
    /** Non-warning doctor notes shown during preview. */
    infoNotes: string[];
    /** Warning notes shown during preview. */
    warningNotes: string[];
};
/** Collect info and warning notes for doctor preview mode. */
export declare function collectDoctorPreviewNotes(params: {
    cfg: OpenClawConfig;
    doctorFixCommand: string;
    env?: NodeJS.ProcessEnv;
}): Promise<DoctorPreviewNotes>;
/** Collect warning notes only for callers that do not display info notes. */
export declare function collectDoctorPreviewWarnings(params: {
    cfg: OpenClawConfig;
    doctorFixCommand: string;
    env?: NodeJS.ProcessEnv;
}): Promise<string[]>;

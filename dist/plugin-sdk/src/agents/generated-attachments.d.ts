export type AgentGeneratedAttachment = {
    type?: "image" | "audio" | "video" | "file";
    path?: string;
    url?: string;
    mediaUrl?: string;
    filePath?: string;
    mimeType?: string;
    name?: string;
};
/** Resolve the first usable path or URL reference for a generated attachment. */
export declare function generatedAttachmentReference(attachment: AgentGeneratedAttachment): string | undefined;
/** Return unique media URLs/paths from generated attachments. */
export declare function mediaUrlsFromGeneratedAttachments(attachments: readonly AgentGeneratedAttachment[] | undefined): string[];
/** Resolve a display name from attachment metadata or path basename. */
export declare function nameFromGeneratedAttachment(attachment: AgentGeneratedAttachment): string | undefined;
/** Format generated attachment metadata as prompt-safe text lines. */
export declare function formatGeneratedAttachmentLines(attachments: readonly AgentGeneratedAttachment[] | undefined): string[];

/** Parsed outbound reply directives and media extracted from model text. */
export type ReplyDirectiveParseResult = {
    text: string;
    mediaUrls?: string[];
    mediaUrl?: string;
    replyToId?: string;
    replyToCurrent?: boolean;
    replyToTag: boolean;
    audioAsVoice?: boolean;
    isSilent: boolean;
};
/** Options for extracting reply directives from model text. */
export type ReplyDirectiveParseOptions = {
    currentMessageId?: string;
    silentToken?: string;
    extractMarkdownImages?: boolean;
    extractMediaDirectives?: boolean;
};
/** Parses media, reply-target, audio, and silent directives from reply text. */
export declare function parseReplyDirectives(raw: string, options?: ReplyDirectiveParseOptions): ReplyDirectiveParseResult;

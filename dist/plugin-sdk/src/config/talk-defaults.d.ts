/** Platform-specific silence windows for talk/voice turn segmentation. */
export declare const TALK_SILENCE_TIMEOUT_MS_BY_PLATFORM: {
    readonly macos: 700;
    readonly android: 700;
    readonly ios: 900;
};
/** Formats the talk silence defaults for config help text. */
export declare function describeTalkSilenceTimeoutDefaults(): string;

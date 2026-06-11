/** Filters tool names by the active message-provider allow/deny policy. */
export declare function filterToolNamesByMessageProvider(toolNames: readonly string[], messageProvider?: string): string[];
/** Applies message-provider filtering while preserving duplicate tool entries. */
export declare function filterToolsByMessageProvider<TTool extends {
    name: string;
}>(tools: readonly TTool[], messageProvider?: string): TTool[];

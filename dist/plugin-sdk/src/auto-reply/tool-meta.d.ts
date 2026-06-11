type ToolAggregateOptions = {
    markdown?: boolean;
};
/** Shortens a filesystem path for display. */
export declare function shortenPath(p: string): string;
/** Shortens user-home paths inside arbitrary tool metadata. */
export declare function shortenMeta(meta: string): string;
/** Formats one grouped tool-progress label from a tool name and metadata entries. */
export declare function formatToolAggregate(toolName?: string, metas?: string[], options?: ToolAggregateOptions): string;
/** Formats the prefix for a single tool event. */
export declare function formatToolPrefix(toolName?: string, meta?: string): string;
export {};

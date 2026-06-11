/** Return true when a message action sends or uploads user-visible content. */
export declare function isMessageToolSendActionName(action: unknown): boolean;
/** Return true for core or channel-plugin messaging tool names. */
export declare function isMessagingTool(toolName: string): boolean;
/** Return true when the specific tool invocation is an outbound send. */
export declare function isMessagingToolSendAction(toolName: string, args: Record<string, unknown>): boolean;

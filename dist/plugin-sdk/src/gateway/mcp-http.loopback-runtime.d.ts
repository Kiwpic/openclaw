type McpLoopbackRuntime = {
    port: number;
    ownerToken: string;
    nonOwnerToken: string;
};
/** Return a copy of the active loopback runtime, if one has been installed. */
export declare function getActiveMcpLoopbackRuntime(): McpLoopbackRuntime | undefined;
/** Install the active loopback runtime used by in-process MCP callers. */
export declare function setActiveMcpLoopbackRuntime(runtime: McpLoopbackRuntime): void;
/** Choose the bearer token matching owner/non-owner caller identity. */
export declare function resolveMcpLoopbackBearerToken(runtime: McpLoopbackRuntime, senderIsOwner: boolean): string;
/** Clear loopback runtime only when the owning token matches the active runtime. */
export declare function clearActiveMcpLoopbackRuntimeByOwnerToken(ownerToken: string): void;
/** Build the MCP server config injected into agents for loopback tool access. */
export declare function createMcpLoopbackServerConfig(port: number): {
    mcpServers: {
        openclaw: {
            type: string;
            url: string;
            headers: {
                Authorization: string;
                "x-session-key": string;
                "x-openclaw-agent-id": string;
                "x-openclaw-account-id": string;
                "x-openclaw-message-channel": string;
                "x-openclaw-current-channel-id": string;
                "x-openclaw-current-thread-ts": string;
                "x-openclaw-current-message-id": string;
                "x-openclaw-current-inbound-audio": string;
                "x-openclaw-inbound-event-kind": string;
                "x-openclaw-source-reply-delivery-mode": string;
            };
        };
    };
};
export {};

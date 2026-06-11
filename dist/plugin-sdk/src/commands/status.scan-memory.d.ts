import type { OpenClawConfig } from "../config/types.js";
import type { getAgentLocalStatuses as getAgentLocalStatusesFn } from "./status.agent-local.js";
import { type MemoryPluginStatus, type MemoryStatusSnapshot } from "./status.scan.shared.js";
/** Returns the default on-disk memory store path for an agent. */
export declare function resolveDefaultMemoryStorePath(agentId: string): string;
/** Resolves memory index/cache status for the current status scan. */
export declare function resolveStatusMemoryStatusSnapshot(params: {
    cfg: OpenClawConfig;
    agentStatus: Awaited<ReturnType<typeof getAgentLocalStatusesFn>>;
    memoryPlugin: MemoryPluginStatus;
    requireDefaultStore?: (agentId: string) => string;
}): Promise<MemoryStatusSnapshot | null>;

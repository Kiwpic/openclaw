/** Lists per-agent session directories under an agents state directory. */
export declare function resolveAgentSessionDirsFromAgentsDir(agentsDir: string): Promise<string[]>;
/** Synchronous variant of per-agent session directory discovery. */
export declare function resolveAgentSessionDirsFromAgentsDirSync(agentsDir: string): string[];
/** Lists per-agent session directories under a state directory. */
export declare function resolveAgentSessionDirs(stateDir: string): Promise<string[]>;

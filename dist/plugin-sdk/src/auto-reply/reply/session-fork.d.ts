/** Public session-fork facade with parent-size admission checks. */
import type { SessionEntry } from "../../config/sessions/types.js";
/** Decision for whether a child session should fork parent context or start isolated. */
export type ParentForkDecision = {
    status: "fork";
    maxTokens: number;
    parentTokens?: number;
} | {
    status: "skip";
    reason: "parent-too-large";
    maxTokens: number;
    parentTokens: number;
    message: string;
};
/** Decides whether parent context is small enough to fork into a child session. */
export declare function resolveParentForkDecision(params: {
    parentEntry: SessionEntry;
    storePath: string;
}): Promise<ParentForkDecision>;
/** Forks a new session transcript from a parent session. */
export declare function forkSessionFromParent(params: {
    parentEntry: SessionEntry;
    agentId: string;
    sessionsDir: string;
}): Promise<{
    sessionId: string;
    sessionFile: string;
} | null>;

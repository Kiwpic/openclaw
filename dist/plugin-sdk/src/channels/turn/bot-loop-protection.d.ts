import { type PairLoopGuardConfig, type PairLoopGuardResult, type PairLoopGuardSnapshotEntry } from "../../plugin-sdk/pair-loop-guard-runtime.js";
/** Facts used to detect repeated bot-to-bot channel reply loops. */
export type ChannelBotLoopProtectionFacts = {
    scopeId: string;
    conversationId: string;
    senderId: string;
    receiverId: string;
    config?: PairLoopGuardConfig;
    defaultsConfig?: PairLoopGuardConfig;
    defaultEnabled: boolean;
    nowMs?: number;
};
/** Records a bot pair interaction and returns whether the loop guard should suppress it. */
export declare function recordChannelBotPairLoopAndCheckSuppression(params: ChannelBotLoopProtectionFacts): PairLoopGuardResult;
/** Clears channel bot-loop state for isolated tests. */
export declare function clearChannelBotPairLoopGuardForTests(): void;
/** Lists tracked bot-loop pairs for isolated tests. */
export declare function listTrackedChannelBotPairsForTests(): PairLoopGuardSnapshotEntry[];

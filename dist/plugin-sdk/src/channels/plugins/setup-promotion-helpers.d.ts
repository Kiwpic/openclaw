type ChannelSectionBase = {
    defaultAccount?: string;
    accounts?: Record<string, Record<string, unknown>>;
};
/**
 * Returns whether one root-level channel key should move into account config.
 */
export declare function shouldMoveSingleAccountChannelKey(params: {
    channelKey: string;
    key: string;
}): boolean;
/**
 * Resolves all root-level keys eligible for single-account promotion.
 */
export declare function resolveSingleAccountKeysToMove(params: {
    channelKey: string;
    channel: Record<string, unknown>;
}): string[];
/**
 * Resolves the account id that should receive promoted single-account config.
 */
export declare function resolveSingleAccountPromotionTarget(params: {
    channelKey: string;
    channel: ChannelSectionBase;
}): string;
export {};

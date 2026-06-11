import { type ArtifactSummary } from "../../../packages/gateway-protocol/src/index.js";
import type { GatewayRequestHandlers } from "./types.js";
type ArtifactRecord = ArtifactSummary & {
    data?: string;
    url?: string;
};
export declare function collectArtifactsFromMessages(params: {
    messages: unknown[];
    sessionKey: string;
    runId?: string;
    taskId?: string;
    includeDownloadData?: boolean;
    downloadArtifactId?: string;
}): ArtifactRecord[];
/** Gateway handlers for listing, summarizing, and downloading transcript artifacts. */
export declare const artifactsHandlers: GatewayRequestHandlers;
export {};

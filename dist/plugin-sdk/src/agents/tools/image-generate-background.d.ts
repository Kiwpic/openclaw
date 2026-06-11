/**
 * Image generation background task facade.
 *
 * Binds shared detached media-task lifecycle behavior to image_generate labels and completion messages.
 */
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { AgentGeneratedAttachment } from "../generated-attachments.js";
import { type MediaGenerationTaskHandle } from "./media-generate-background-shared.js";
/** Detached image generation task handle. */
export type ImageGenerationTaskHandle = MediaGenerationTaskHandle;
/** Shared lifecycle instance configured for image generation. */
export declare const imageGenerationTaskLifecycle: {
    createTaskRun: (params: {
        sessionKey?: string;
        requesterOrigin?: import("../subagent-announce-origin.ts").DeliveryContext;
        prompt: string;
        providerId?: string;
    }) => MediaGenerationTaskHandle | null;
    recordTaskProgress: (params: {
        handle: MediaGenerationTaskHandle | null;
        progressSummary: string;
        eventSummary?: string;
    }) => void;
    completeTaskRun: (params: {
        handle: MediaGenerationTaskHandle | null;
        provider: string;
        model: string;
        count: number;
        paths: string[];
        terminalResult?: import("../../tasks/task-completion-contract.ts").RequiredCompletionTerminalResult;
    }) => void;
    failTaskRun: (params: {
        handle: MediaGenerationTaskHandle | null;
        error: unknown;
    }) => void;
    wakeTaskCompletion: (params: {
        config?: OpenClawConfig;
        handle: MediaGenerationTaskHandle | null;
        status: "ok" | "error";
        statusLabel: string;
        result: string;
        attachments?: AgentGeneratedAttachment[];
        mediaUrls?: string[];
        statsLine?: string;
    }) => Promise<boolean>;
};
/** Creates an image generation task ledger run. */
export declare const createImageGenerationTaskRun: (...params: Parameters<typeof imageGenerationTaskLifecycle.createTaskRun>) => MediaGenerationTaskHandle | null;
/** Records progress for an image generation task. */
export declare const recordImageGenerationTaskProgress: (...params: Parameters<typeof imageGenerationTaskLifecycle.recordTaskProgress>) => void;
/** Completes an image generation task ledger run. */
export declare const completeImageGenerationTaskRun: (...params: Parameters<typeof imageGenerationTaskLifecycle.completeTaskRun>) => void;
/** Marks an image generation task ledger run as failed. */
export declare const failImageGenerationTaskRun: (...params: Parameters<typeof imageGenerationTaskLifecycle.failTaskRun>) => void;
/** Wakes the requester session with image generation completion or failure. */
export declare function wakeImageGenerationTaskCompletion(params: {
    config?: OpenClawConfig;
    handle: ImageGenerationTaskHandle | null;
    status: "ok" | "error";
    statusLabel: string;
    result: string;
    attachments?: AgentGeneratedAttachment[];
    mediaUrls?: string[];
    statsLine?: string;
}): Promise<boolean>;

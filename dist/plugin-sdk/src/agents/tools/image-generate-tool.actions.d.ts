/**
 * image_generate action helpers.
 *
 * Handles provider listing, task status, and duplicate-guard output for the image generation tool.
 */
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { ImageGenerationProvider } from "../../image-generation/types.js";
import type { AuthProfileStore } from "../auth-profiles/types.js";
import { type MediaGenerateActionResult } from "./media-generate-tool-actions-shared.js";
export type ImageGenerateActionResult = MediaGenerateActionResult;
/** Formats provider auth setup hints for the image generation `list` action. */
export declare function formatImageGenerationAuthHint(provider: {
    id: string;
    authEnvVars: readonly string[];
}): string | undefined;
/** Lists supported image-generation modes exposed by a provider. */
export declare function listSupportedImageGenerationModes(provider: ImageGenerationProvider): string[];
/** Formats provider capability details for the image generation `list` action. */
export declare function summarizeImageGenerationCapabilities(provider: ImageGenerationProvider): string;
/** Builds the image-generation provider listing result shown to the agent. */
export declare function createImageGenerateListActionResult(params: {
    cfg?: OpenClawConfig;
    workspaceDir?: string;
    agentDir?: string;
    authStore?: AuthProfileStore;
}): ImageGenerateActionResult;
/** Builds status output for active image-generation tasks in the current session. */
export declare function createImageGenerateStatusActionResult(sessionKey?: string): ImageGenerateActionResult;
/** Returns duplicate-guard status output when a matching image task is already active. */
export declare function createImageGenerateDuplicateGuardResult(sessionKey?: string, params?: {
    prompt?: string;
    requestKey?: string;
}): ImageGenerateActionResult | undefined;

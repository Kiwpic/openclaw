import { sanitizeGoogleTurnOrdering } from "./bootstrap.js";
/** Detects Google-owned embedded runtime APIs. */
export declare function isGoogleModelApi(api?: string | null): boolean;
/** Returns true for Gemma models whose reasoning payload must be stripped. */
export declare function isGemma4ModelRequiringReasoningStrip(modelId?: string | null): boolean;
export { sanitizeGoogleTurnOrdering };

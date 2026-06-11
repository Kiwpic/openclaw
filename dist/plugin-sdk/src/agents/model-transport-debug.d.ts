/**
 * Environment-driven debug controls for model transport logging.
 *
 * Model adapters share these helpers so payload, SSE, and transport diagnostics
 * interpret OpenClaw debug environment variables consistently.
 */
import type { createSubsystemLogger } from "../logging/subsystem.js";
type SubsystemLogger = ReturnType<typeof createSubsystemLogger>;
type ModelTransportDebugEnv = NodeJS.ProcessEnv;
/** Payload debug detail levels accepted by `OPENCLAW_DEBUG_MODEL_PAYLOAD`. */
export type ModelPayloadDebugMode = "off" | "summary" | "tools" | "full-redacted";
/** SSE debug detail levels accepted by `OPENCLAW_DEBUG_SSE`. */
export type ModelSseDebugMode = "off" | "events" | "peek";
/** Resolves model payload debug verbosity from `OPENCLAW_DEBUG_MODEL_PAYLOAD`. */
export declare function resolveModelPayloadDebugMode(env?: ModelTransportDebugEnv): ModelPayloadDebugMode;
/** Resolves SSE stream debug verbosity from `OPENCLAW_DEBUG_SSE`. */
export declare function resolveModelSseDebugMode(env?: ModelTransportDebugEnv): ModelSseDebugMode;
/** Returns whether any model transport debug channel is enabled. */
export declare function isModelTransportDebugEnabled(env?: ModelTransportDebugEnv): boolean;
/** Emits transport diagnostics at info level only when debug env explicitly enables them. */
export declare function emitModelTransportDebug(log: SubsystemLogger, message: string): void;
export {};

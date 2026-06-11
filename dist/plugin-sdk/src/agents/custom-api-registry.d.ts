import type { Api } from "../llm/types.js";
import type { StreamFn } from "./runtime/index.js";
/** Returns the registry source id used for a custom API stream function. */
export declare function getCustomApiRegistrySourceId(api: Api): string;
/** Registers a custom API stream function when no provider already owns it. */
export declare function ensureCustomApiRegistered(api: Api, streamFn: StreamFn): boolean;

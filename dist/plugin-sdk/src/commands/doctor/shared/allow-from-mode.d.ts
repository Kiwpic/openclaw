import type { AllowFromMode } from "./allow-from-mode.types.js";
export type { AllowFromMode } from "./allow-from-mode.types.js";
/** Return the allowFrom interpretation mode advertised by a channel's doctor metadata. */
export declare function resolveAllowFromMode(channelName: string): AllowFromMode;

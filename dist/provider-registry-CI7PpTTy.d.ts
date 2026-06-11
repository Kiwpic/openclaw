import { i as OpenClawConfig } from "./types.openclaw-C8mNEQ_D.js";
import { Zn as VideoGenerationProviderPlugin } from "./types-Cqh78_VH.js";

//#region src/video-generation/provider-registry.d.ts
declare function listVideoGenerationProviders(cfg?: OpenClawConfig): VideoGenerationProviderPlugin[];
declare function getVideoGenerationProvider(providerId: string | undefined, cfg?: OpenClawConfig): VideoGenerationProviderPlugin | undefined;
//#endregion
export { listVideoGenerationProviders as n, getVideoGenerationProvider as t };
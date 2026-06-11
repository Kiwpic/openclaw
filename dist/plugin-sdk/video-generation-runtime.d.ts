import { i as OpenClawConfig } from "./types.openclaw-BnYC9Nsr.js";
import { Xs as GenerateVideoParams, Zs as GenerateVideoRuntimeResult } from "./types-DDKC2NLO.js";
import { t as SubsystemLogger } from "./subsystem-Boo2DQIV.js";
import { n as getProviderEnvVars } from "./provider-env-vars-CtmItfUs.js";
import { s as VideoGenerationProvider } from "./types-Y9GFqpT9.js";
import { n as listVideoGenerationProviders, t as getVideoGenerationProvider } from "./provider-registry-C02TuZ1x.js";

//#region src/video-generation/runtime.d.ts
declare const log: SubsystemLogger;
type VideoGenerationRuntimeDeps = {
  getProvider?: typeof getVideoGenerationProvider;
  listProviders?: typeof listVideoGenerationProviders;
  getProviderEnvVars?: typeof getProviderEnvVars;
  log?: Pick<typeof log, "debug" | "warn">;
};
declare function listRuntimeVideoGenerationProviders(params?: {
  config?: OpenClawConfig;
}, deps?: VideoGenerationRuntimeDeps): VideoGenerationProvider[];
declare function generateVideo(params: GenerateVideoParams, deps?: VideoGenerationRuntimeDeps): Promise<GenerateVideoRuntimeResult>;
//#endregion
export { type GenerateVideoParams, type GenerateVideoRuntimeResult, generateVideo, listRuntimeVideoGenerationProviders };
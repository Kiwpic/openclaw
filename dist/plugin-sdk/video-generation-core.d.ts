import { i as OpenClawConfig } from "./types.openclaw-BnYC9Nsr.js";
import { s as AuthProfileStore } from "./types-wSbu_V72.js";
import { Zn as VideoGenerationProviderPlugin } from "./types-DDKC2NLO.js";
import { t as FallbackAttempt } from "./model-fallback.types-BQfVfFgq.js";
import { n as createSubsystemLogger } from "./subsystem-Boo2DQIV.js";
import { n as getProviderEnvVars } from "./provider-env-vars-CtmItfUs.js";
import { a as VideoGenerationModelCapabilitiesContext, c as VideoGenerationProviderCapabilities, d as VideoGenerationResolution, f as VideoGenerationResult, i as VideoGenerationModeCapabilities, l as VideoGenerationProviderConfiguredContext, m as VideoGenerationTransformCapabilities, n as VideoGenerationIgnoredOverride, p as VideoGenerationSourceAsset, r as VideoGenerationMode, s as VideoGenerationProvider, t as GeneratedVideoAsset, u as VideoGenerationRequest } from "./types-Y9GFqpT9.js";
import { n as isFailoverError, t as describeFailoverError } from "./failover-error-DdKJLPBP.js";
import { p as throwCapabilityGenerationFailure, r as buildNoCapabilityModelConfiguredMessage, s as resolveCapabilityModelCandidates } from "./runtime-shared-BBocYVWE.js";
import { n as resolveAgentModelPrimaryValue, t as resolveAgentModelFallbackValues } from "./model-input-WydzjhuC.js";
import { n as listVideoGenerationProviders, t as getVideoGenerationProvider } from "./provider-registry-C02TuZ1x.js";

//#region src/video-generation/model-ref.d.ts
declare function parseVideoGenerationModelRef(raw: string | undefined): {
  provider: string;
  model: string;
} | null;
//#endregion
export { type AuthProfileStore, type FallbackAttempt, type GeneratedVideoAsset, type OpenClawConfig, type VideoGenerationIgnoredOverride, type VideoGenerationMode, type VideoGenerationModeCapabilities, type VideoGenerationModelCapabilitiesContext, type VideoGenerationProvider, type VideoGenerationProviderCapabilities, type VideoGenerationProviderConfiguredContext, type VideoGenerationProviderPlugin, type VideoGenerationRequest, type VideoGenerationResolution, type VideoGenerationResult, type VideoGenerationSourceAsset, type VideoGenerationTransformCapabilities, buildNoCapabilityModelConfiguredMessage, createSubsystemLogger, describeFailoverError, getProviderEnvVars, getVideoGenerationProvider, isFailoverError, listVideoGenerationProviders, parseVideoGenerationModelRef, resolveAgentModelFallbackValues, resolveAgentModelPrimaryValue, resolveCapabilityModelCandidates, throwCapabilityGenerationFailure };
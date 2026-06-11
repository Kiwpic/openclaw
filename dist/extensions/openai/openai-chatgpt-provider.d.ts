import { cn as ProviderPlugin } from "../../types-Cqh78_VH.js";
import { mt as ProviderAuthMethod } from "../../plugin-entry-Dw44CWny.js";
//#region extensions/openai/openai-chatgpt-provider.d.ts
declare function buildOpenAIChatGPTAuthMethods(): ProviderAuthMethod[];
declare function buildOpenAICodexProviderHooks(): Pick<ProviderPlugin, "resolveDynamicModel" | "buildAuthDoctorHint" | "resolveThinkingProfile" | "isModernModelRef" | "preferRuntimeResolvedModel" | "normalizeResolvedModel" | "normalizeTransport" | "resolveUsageAuth" | "fetchUsageSnapshot" | "refreshOAuth" | "augmentModelCatalog" | "resolveReasoningOutputMode">;
//#endregion
export { buildOpenAIChatGPTAuthMethods, buildOpenAICodexProviderHooks };
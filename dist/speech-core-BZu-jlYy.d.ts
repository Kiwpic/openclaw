import { i as OpenClawConfig } from "./types.openclaw-C8mNEQ_D.js";
import { f as Model, n as Api } from "./types-WTNiQJmZ.js";
import { Jo as ResolvedTtsConfig, es as SpeechDirectiveTokenParseContext, ts as SpeechDirectiveTokenParseResult, wc as resolveModelAsync } from "./types-Cqh78_VH.js";
import { _ as completeSimple } from "./llm-CwefEtYu.js";
import { D as requireApiKey, l as getApiKeyForModel } from "./model-auth-C4bApzX-.js";
//#region src/agents/simple-completion-transport.d.ts
declare function prepareModelForSimpleCompletion<TApi extends Api>(params: {
  model: Model<TApi>;
  cfg?: OpenClawConfig;
}): Model;
//#endregion
//#region src/tts/tts-core.d.ts
type SummarizeTextDeps = {
  completeSimple: typeof completeSimple;
  getApiKeyForModel: typeof getApiKeyForModel;
  prepareModelForSimpleCompletion: typeof prepareModelForSimpleCompletion;
  requireApiKey: typeof requireApiKey;
  resolveModelAsync: typeof resolveModelAsync;
};
type SummarizeResult = {
  summary: string;
  latencyMs: number;
  inputLength: number;
  outputLength: number;
};
/** Summarize long text before synthesis using the configured summary model. */
declare function summarizeText(params: {
  text: string;
  targetLength: number;
  cfg: OpenClawConfig;
  config: ResolvedTtsConfig;
  timeoutMs: number;
}, deps?: SummarizeTextDeps): Promise<SummarizeResult>;
//#endregion
//#region src/tts/directive-number.d.ts
/** Numeric directive parsing shared by speech providers with bounded knobs. */
type DirectiveNumberRange = {
  min?: number;
  max?: number;
  minExclusive?: boolean;
  maxExclusive?: boolean;
};
/** Parse a numeric speech directive token and return provider overrides when policy allows it. */
declare function parseSpeechDirectiveNumberOverride(params: {
  ctx: SpeechDirectiveTokenParseContext;
  overrideKey: string;
  range: DirectiveNumberRange;
  warning: (value: string) => string;
  mergeCurrentOverrides?: boolean;
}): SpeechDirectiveTokenParseResult;
//#endregion
export { summarizeText as n, parseSpeechDirectiveNumberOverride as t };
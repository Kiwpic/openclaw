import { m as ModelProviderDeclarationConfig } from "../../types.models-C7xuGz22.js";
import { Ac as ProviderRuntimeModel } from "../../types-Cqh78_VH.js";
import { t as ModelCatalogEntry } from "../../model-catalog.types-CQB2Hpty.js";
import { a as LiveModelCatalogFetchGuard } from "../../provider-catalog-live-runtime-Bgql15qj.js";

//#region extensions/opencode-go/provider-catalog.d.ts
type FetchOpencodeGoLiveModelIdsParams = {
  apiKey?: string;
  discoveryApiKey?: string;
  fetchGuard?: LiveModelCatalogFetchGuard;
  signal?: AbortSignal;
};
declare function buildStaticOpencodeGoProviderConfig(apiKey?: string): ModelProviderDeclarationConfig;
declare function buildOpencodeGoLiveProviderConfig(params?: FetchOpencodeGoLiveModelIdsParams): Promise<ModelProviderDeclarationConfig>;
declare function listOpencodeGoModelCatalogEntries(): ModelCatalogEntry[];
declare function resolveOpencodeGoModel(modelId: string): ProviderRuntimeModel | undefined;
declare function isOpencodeGoKimiNoReasoningModelId(modelId: unknown): boolean;
declare function normalizeOpencodeGoResolvedModel(model: ProviderRuntimeModel): ProviderRuntimeModel | undefined;
declare function normalizeOpencodeGoBaseUrl(params: {
  api?: string | null;
  baseUrl?: string;
}): string | undefined;
//#endregion
export { FetchOpencodeGoLiveModelIdsParams, buildOpencodeGoLiveProviderConfig, buildStaticOpencodeGoProviderConfig, isOpencodeGoKimiNoReasoningModelId, listOpencodeGoModelCatalogEntries, normalizeOpencodeGoBaseUrl, normalizeOpencodeGoResolvedModel, resolveOpencodeGoModel };
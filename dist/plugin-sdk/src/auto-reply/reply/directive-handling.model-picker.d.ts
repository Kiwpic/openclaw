import { type ModelRef } from "../../agents/model-selection.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
/** Catalog entry shown by the model picker directive UI. */
export type ModelPickerCatalogEntry = {
    provider: string;
    id: string;
    name?: string;
};
/** Normalized model reference emitted by the model picker. */
export type ModelPickerItem = ModelRef;
/** Builds de-duped picker items from provider catalogs in display order. */
export declare function buildModelPickerItems(catalog: ModelPickerCatalogEntry[]): ModelPickerItem[];
/** Resolves optional endpoint/API labels for a provider in picker details. */
export declare function resolveProviderEndpointLabel(provider: string, cfg: OpenClawConfig): {
    endpoint?: string;
    api?: string;
};

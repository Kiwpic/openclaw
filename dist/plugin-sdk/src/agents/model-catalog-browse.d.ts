import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ModelCatalogEntry } from "./model-catalog.types.js";
/**
 * Loads the model catalog shape used by browse/list commands without letting optional
 * provider discovery stall the CLI path.
 */
export declare const DEFAULT_MODEL_CATALOG_BROWSE_TIMEOUT_MS = 750;
/** Visible model subset requested by model browse callers. */
export type ModelCatalogBrowseView = "default" | "configured" | "all";
declare const modelCatalogBrowseDeps: {
    setTimeout: typeof setTimeout;
    clearTimeout: typeof clearTimeout;
};
/** Replaces timer hooks for deterministic timeout tests. */
export declare function setModelCatalogBrowseTestDeps(overrides: Partial<typeof modelCatalogBrowseDeps>): void;
/** Restores global timer hooks after catalog browse timeout tests. */
export declare function restoreModelCatalogBrowseTestDeps(): void;
/** True when a browse view cannot be answered from read-only cached catalog entries. */
export declare function modelCatalogBrowseRequiresFullDiscovery(params: {
    cfg: OpenClawConfig;
    view?: ModelCatalogBrowseView;
}): boolean;
/** Loads catalog entries for browse views, using read-only discovery unless full catalog is required. */
export declare function loadModelCatalogForBrowse(params: {
    cfg: OpenClawConfig;
    view?: ModelCatalogBrowseView;
    loadCatalog: (params: {
        readOnly: boolean;
    }) => Promise<ModelCatalogEntry[]>;
    timeoutMs?: number;
    onTimeout?: (timeoutMs: number) => void;
}): Promise<ModelCatalogEntry[]>;
export {};

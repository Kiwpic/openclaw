import { collectAllowedToolNames } from "../tool-name-allowlist.js";
/** Tool-search control tools that may be auto-added when tool search is enabled. */
export declare const TOOL_SEARCH_CONTROL_ALLOWLIST_NAMES: string[];
type CollectAllowedToolNamesParams = Parameters<typeof collectAllowedToolNames>[0];
/** Derived tool allowlists used for visible prompt tools, replay tools, and empty-allowlist checks. */
export type ToolSearchRunPlan = {
    visibleAllowedToolNames: Set<string>;
    replayAllowedToolNames: Set<string>;
    autoAddedControlNames?: Set<string>;
    emptyAllowlistCallableNames: string[];
};
/**
 * Builds the callable-name list used to decide whether an allowlist is empty.
 * Auto-added tool-search controls are excluded so they do not make an otherwise
 * empty user/tool allowlist look populated.
 */
export declare function buildCallableToolNamesForEmptyAllowlistCheck(params: {
    effectiveToolNames: string[];
    autoAddedToolSearchControlNames?: Set<string>;
    toolSearchCatalogToolCount: number;
}): string[];
/**
 * Identifies tool-search control names that were added by policy rather than
 * explicitly allowed by the user. Explicit controls stay visible to empty
 * allowlist checks because the user selected them.
 */
export declare function buildAutoAddedToolSearchControlNamesForAllowlistCheck(params: {
    toolSearchControlsEnabled: boolean;
    explicitAllowlistSources: Array<{
        entries: string[];
    }>;
    controlNames?: readonly string[];
}): Set<string> | undefined;
/**
 * Builds the complete tool-search allowlist plan for one run. Visible tools use
 * compacted prompt state, replay tools use uncompacted state, and catalog-backed
 * client tools are represented through synthetic tool-search callable names.
 */
export declare function buildToolSearchRunPlan(params: {
    visibleTools: CollectAllowedToolNamesParams["tools"];
    uncompactedTools: CollectAllowedToolNamesParams["tools"];
    clientTools?: CollectAllowedToolNamesParams["clientTools"];
    catalogRegistered: boolean;
    catalogToolCount: number;
    controlsEnabled: boolean;
    controlNames?: readonly string[];
    explicitAllowlistSources: Array<{
        entries: string[];
    }>;
}): ToolSearchRunPlan;
export {};

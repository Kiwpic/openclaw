import type { PluginDependencySpecMap, PluginDependencyStatus } from "./status-dependencies.js";
/** Resolves required and optional dependency status for one plugin root. */
export declare function buildSnapshotPluginDependencyStatus(params: {
    rootDir?: string;
    dependencies?: PluginDependencySpecMap;
    optionalDependencies?: PluginDependencySpecMap;
}): PluginDependencyStatus;

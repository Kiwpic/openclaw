/** Options for resolving installed plugin index storage paths. */
export type InstalledPluginIndexStoreOptions = {
    env?: NodeJS.ProcessEnv;
    stateDir?: string;
    filePath?: string;
};
/** Resolves the canonical SQLite-backed installed plugin index path. */
export declare function resolveInstalledPluginIndexStorePath(options?: InstalledPluginIndexStoreOptions): string;
/** Resolves the legacy JSON installed plugin index path for migration/doctor use. */
export declare function resolveLegacyInstalledPluginIndexStorePath(options?: InstalledPluginIndexStoreOptions): string;

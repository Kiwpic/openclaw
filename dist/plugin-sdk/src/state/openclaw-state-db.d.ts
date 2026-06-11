import type { DatabaseSync } from "node:sqlite";
import { type SqliteWalMaintenance } from "../infra/sqlite-wal.js";
/** Shared timeout used by state and agent SQLite handles before surfacing busy errors. */
export declare const OPENCLAW_SQLITE_BUSY_TIMEOUT_MS = 30000;
/** Open shared SQLite database handle plus WAL maintenance lifecycle. */
export type OpenClawStateDatabase = {
    db: DatabaseSync;
    path: string;
    walMaintenance: SqliteWalMaintenance;
};
/** Options for resolving or overriding the shared state database path. */
export type OpenClawStateDatabaseOptions = {
    env?: NodeJS.ProcessEnv;
    path?: string;
};
/** Status stored for a state migration run. */
export type OpenClawMigrationRunStatus = "completed" | "warning" | "failed";
/** Status stored for a state backup run. */
export type OpenClawBackupRunStatus = "completed" | "failed";
export type OpenClawStateDatabaseSchemaMigration = {
    kind: "agent-databases-composite-primary-key";
    path: string;
};
/** Input for recording one state migration run summary. */
export type RecordOpenClawStateMigrationRunOptions = OpenClawStateDatabaseOptions & {
    id?: string;
    startedAt: number;
    finishedAt?: number;
    status: OpenClawMigrationRunStatus;
    report: Record<string, unknown>;
};
/** Input for recording one migrated source file/table pair. */
export type RecordOpenClawStateMigrationSourceOptions = OpenClawStateDatabaseOptions & {
    runId: string;
    migrationKind: string;
    sourceKey: string;
    sourcePath: string;
    targetTable: string;
    status: OpenClawMigrationRunStatus;
    importedAt: number;
    removedSource: boolean;
    sourceSha256?: string;
    sourceSizeBytes?: number;
    sourceRecordCount?: number;
    report: Record<string, unknown>;
};
/** Input for recording one state backup archive. */
export type RecordOpenClawStateBackupRunOptions = OpenClawStateDatabaseOptions & {
    id?: string;
    createdAt: number;
    archivePath: string;
    status: OpenClawBackupRunStatus;
    manifest: Record<string, unknown>;
};
export declare function detectOpenClawStateDatabaseSchemaMigrations(options?: OpenClawStateDatabaseOptions): OpenClawStateDatabaseSchemaMigration[];
export declare function repairOpenClawStateDatabaseSchema(options?: OpenClawStateDatabaseOptions): {
    changes: string[];
    warnings: string[];
};
/** Open or return a cached shared state database after schema and migration checks. */
export declare function openOpenClawStateDatabase(options?: OpenClawStateDatabaseOptions): OpenClawStateDatabase;
/** Run a synchronous immediate transaction against the shared state database. */
export declare function runOpenClawStateWriteTransaction<T>(operation: (database: OpenClawStateDatabase) => T, options?: OpenClawStateDatabaseOptions): T;
/** Record a state migration run and return its stable run id. */
export declare function recordOpenClawStateMigrationRun(options: RecordOpenClawStateMigrationRunOptions): string;
/** Upsert the per-source audit row for a state migration. */
export declare function recordOpenClawStateMigrationSource(options: RecordOpenClawStateMigrationSourceOptions): void;
/** Record a state backup archive and return its stable backup id. */
export declare function recordOpenClawStateBackupRun(options: RecordOpenClawStateBackupRunOptions): string;
/** Close all cached shared state database handles. */
export declare function closeOpenClawStateDatabase(): void;
/** Test whether any cached shared state database handle is still open. */
export declare function isOpenClawStateDatabaseOpen(): boolean;
/** Test alias for closing shared state handles from teardown code. */
export declare const closeOpenClawStateDatabaseForTest: typeof closeOpenClawStateDatabase;

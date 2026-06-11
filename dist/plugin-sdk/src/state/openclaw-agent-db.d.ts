import type { DatabaseSync } from "node:sqlite";
import { type SqliteWalMaintenance } from "../infra/sqlite-wal.js";
import { type OpenClawStateDatabaseOptions } from "./openclaw-state-db.js";
export { resolveOpenClawAgentSqlitePath } from "./openclaw-agent-db.paths.js";
/** Open per-agent SQLite database handle plus lifecycle maintenance. */
export type OpenClawAgentDatabase = {
    agentId: string;
    db: DatabaseSync;
    path: string;
    walMaintenance: SqliteWalMaintenance;
};
/** Options for resolving and opening one agent database. */
export type OpenClawAgentDatabaseOptions = OpenClawStateDatabaseOptions & {
    agentId: string;
};
/** Shared-state registry row describing an agent database seen by this process. */
export type OpenClawRegisteredAgentDatabase = {
    agentId: string;
    path: string;
    schemaVersion: number;
    lastSeenAt: number;
    sizeBytes: number | null;
};
/** List agent databases recorded in the shared OpenClaw state registry. */
export declare function listOpenClawRegisteredAgentDatabases(options?: OpenClawStateDatabaseOptions): OpenClawRegisteredAgentDatabase[];
/** Open or return a cached per-agent database after schema and owner validation. */
export declare function openOpenClawAgentDatabase(options: OpenClawAgentDatabaseOptions): OpenClawAgentDatabase;
/** Run a synchronous immediate transaction against an agent database. */
export declare function runOpenClawAgentWriteTransaction<T>(operation: (database: OpenClawAgentDatabase) => T, options: OpenClawAgentDatabaseOptions): T;
/** Close cached agent databases so tests can remove temp dirs and reopen cleanly. */
export declare function closeOpenClawAgentDatabasesForTest(): void;

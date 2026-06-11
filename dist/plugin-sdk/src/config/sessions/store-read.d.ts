import type { SessionEntry } from "./types.js";
/** Reads a session store without mutating it and drops malformed entries. */
export declare function readSessionStoreReadOnly(storePath: string): Record<string, SessionEntry | undefined>;

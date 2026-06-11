import type { DeliveryContext } from "../utils/delivery-context.types.js";
export declare const SQLITE_SIDECAR_SUFFIXES: readonly ["", "-shm", "-wal"];
export declare function normalizeSqliteNumber(value: number | bigint | null): number | undefined;
export declare function parseSqliteJsonValue<T>(raw: string | null): T | undefined;
export declare function parseDeliveryContextJson(raw: string | null): DeliveryContext | undefined;
export declare function ensureSqliteStorePermissions(params: {
    dir: string;
    pathname: string;
    dirMode: number;
    fileMode: number;
}): void;

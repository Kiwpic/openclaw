import "./fs-safe-defaults.js";
import { tryReadJsonSync, writeJsonSync } from "@openclaw/fs-safe/json";
export { tryReadJsonSync, writeJsonSync };
export declare function saveJsonFile(pathname: string, data: unknown): void;
export declare function repairJsonFilePermissions(pathname: string): void;
export declare function loadJsonFile<T = unknown>(pathname: string): T | undefined;

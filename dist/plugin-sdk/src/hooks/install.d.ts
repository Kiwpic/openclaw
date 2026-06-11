import type { NpmIntegrityDrift, NpmSpecResolution } from "../infra/install-source-utils.js";
import type { InstallSafetyOverrides } from "../plugins/install-security-scan.js";
/** Logger contract used by hook install and update operations. */
export type HookInstallLogger = {
    info?: (message: string) => void;
    warn?: (message: string) => void;
};
export type InstallHooksResult = {
    ok: true;
    hookPackId: string;
    hooks: string[];
    targetDir: string;
    version?: string;
    npmResolution?: NpmSpecResolution;
    integrityDrift?: NpmIntegrityDrift;
} | {
    ok: false;
    error: string;
};
/** Integrity drift payload surfaced when npm metadata no longer matches an install record. */
export type HookNpmIntegrityDriftParams = {
    spec: string;
    expectedIntegrity: string;
    actualIntegrity: string;
    resolution: NpmSpecResolution;
};
type HookInstallForwardParams = InstallSafetyOverrides & {
    hooksDir?: string;
    timeoutMs?: number;
    logger?: HookInstallLogger;
    mode?: "install" | "update";
    dryRun?: boolean;
    expectedHookPackId?: string;
};
type HookArchiveInstallParams = {
    archivePath: string;
} & HookInstallForwardParams;
type HookPathInstallParams = {
    path: string;
} & HookInstallForwardParams;
/** Resolve the canonical local install directory for one hook pack id. */
export declare function resolveHookInstallDir(hookId: string, hooksDir?: string): string;
/** Install hooks from an archive after extracting and validating the archive root. */
export declare function installHooksFromArchive(params: HookArchiveInstallParams): Promise<InstallHooksResult>;
/** Download, verify, and install an npm hook pack tarball. */
export declare function installHooksFromNpmSpec(params: {
    spec: string;
    dangerouslyForceUnsafeInstall?: boolean;
    hooksDir?: string;
    timeoutMs?: number;
    logger?: HookInstallLogger;
    mode?: "install" | "update";
    dryRun?: boolean;
    expectedHookPackId?: string;
    expectedIntegrity?: string;
    onIntegrityDrift?: (params: HookNpmIntegrityDriftParams) => boolean | Promise<boolean>;
}): Promise<InstallHooksResult>;
/** Install a hook pack or single hook from a local directory/archive path. */
export declare function installHooksFromPath(params: HookPathInstallParams): Promise<InstallHooksResult>;
export {};

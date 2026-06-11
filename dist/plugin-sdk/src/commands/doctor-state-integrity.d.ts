import { note } from "../../packages/terminal-core/src/note.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
type DoctorPrompterLike = {
    confirmRuntimeRepair: (params: {
        message: string;
        initialValue?: boolean;
        requiresInteractiveConfirmation?: boolean;
    }) => Promise<boolean>;
    note?: typeof note;
};
export type LinuxSdBackedStateDir = {
    path: string;
    mountPoint: string;
    fsType: string;
    source: string;
};
/** Detects Linux state directories mounted from SD/eMMC-style block devices. */
export declare function detectLinuxSdBackedStateDir(stateDir: string, deps?: {
    platform?: NodeJS.Platform;
    mountInfo?: string;
    resolveRealPath?: (targetPath: string) => string | null;
    resolveDeviceRealPath?: (targetPath: string) => string | null;
}): LinuxSdBackedStateDir | null;
/** Formats the warning for state stored on SD/eMMC media. */
export declare function formatLinuxSdBackedStateDirWarning(displayStateDir: string, linuxSdBackedStateDir: LinuxSdBackedStateDir): string;
/** Detects macOS state directories under iCloud Drive or CloudStorage providers. */
export declare function detectMacCloudSyncedStateDir(stateDir: string, deps?: {
    platform?: NodeJS.Platform;
    homedir?: string;
    resolveRealPath?: (targetPath: string) => string | null;
}): {
    path: string;
    storage: "iCloud Drive" | "CloudStorage provider";
} | null;
/** Emits state integrity warnings and applies selected runtime repairs. */
export declare function noteStateIntegrity(cfg: OpenClawConfig, prompter: DoctorPrompterLike, configPath?: string): Promise<void>;
/** Returns the workspace git-backup tip when the workspace exists but is not a git repo. */
export declare function collectWorkspaceBackupTip(workspaceDir: string): string | null;
/** Emits the workspace backup tip when applicable. */
export declare function noteWorkspaceBackupTip(workspaceDir: string): void;
export {};

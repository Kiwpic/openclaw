import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { type ClawHubSkillDetail, type ClawHubSkillSearchResult } from "../../infra/clawhub.js";
export type ClawHubSkillOrigin = {
    version: 1;
    registry: string;
    slug: string;
    installedVersion: string;
    installedAt: number;
};
export type ClawHubSkillsLockfile = {
    version: 1;
    skills: Record<string, {
        version: string;
        installedAt: number;
        registry?: string;
    }>;
};
export type ClawHubSkillsLockfileStatusRead = {
    kind: "found";
    lock: ClawHubSkillsLockfile;
    path: string;
} | {
    kind: "missing";
} | {
    kind: "malformed";
    path: string;
    error: string;
};
export type ClawHubSkillStatusLink = {
    status: "linked";
    valid: true;
    registry: string;
    slug: string;
    installedVersion: string;
    installedAt: number;
    originPath: string;
    lockPath: string;
} | {
    status: "invalid";
    valid: false;
    reason: string;
    registry?: string;
    slug?: string;
    installedVersion?: string;
    installedAt?: number;
    originPath?: string;
    lockPath?: string;
};
export type LocalSkillCardStatus = {
    present: true;
    path: string;
    sizeBytes: number;
};
export type InstallClawHubSkillResult = {
    ok: true;
    slug: string;
    version: string;
    targetDir: string;
    detail?: ClawHubSkillDetail;
} | {
    ok: false;
    error: string;
};
export type UpdateClawHubSkillResult = {
    ok: true;
    slug: string;
    previousVersion: string | null;
    version: string;
    changed: boolean;
    targetDir: string;
} | {
    ok: false;
    error: string;
};
type Logger = {
    info?: (message: string) => void;
};
export type ClawHubSkillVerificationResolutionSource = "installed" | "registry";
export type ClawHubSkillVerificationSelector = "installed-version" | "version" | "tag" | "latest";
export type ClawHubSkillVerificationTargetResult = {
    ok: true;
    slug: string;
    baseUrl: string;
    version: string | undefined;
    tag: string | undefined;
    resolution: {
        source: ClawHubSkillVerificationResolutionSource;
        selector: ClawHubSkillVerificationSelector;
        registry: string;
        skillDir: string | undefined;
        installedVersion: string | undefined;
    };
} | {
    ok: false;
    error: string;
};
export declare function readClawHubSkillsLockfile(workspaceDir: string): Promise<ClawHubSkillsLockfile>;
export declare function readClawHubSkillsLockfileStatusSync(workspaceDir: string): ClawHubSkillsLockfileStatusRead;
export declare function resolveClawHubSkillStatusLinkSync(params: {
    workspaceDir: string;
    skillDir: string;
    skillKey: string;
    lockRead?: ClawHubSkillsLockfileStatusRead;
}): ClawHubSkillStatusLink | undefined;
export declare function resolveLocalSkillCardStatusSync(skillDir: string): LocalSkillCardStatus | undefined;
export declare function readLocalSkillCardContentSync(skillDir: string): string | undefined;
export declare function searchSkillsFromClawHub(params: {
    query?: string;
    limit?: number;
    baseUrl?: string;
}): Promise<ClawHubSkillSearchResult[]>;
export declare function resolveClawHubSkillVerificationTarget(params: {
    workspaceDir: string;
    slug: string;
    version?: string;
    tag?: string;
    baseUrl?: string;
}): Promise<ClawHubSkillVerificationTargetResult>;
export declare function installSkillFromClawHub(params: {
    workspaceDir: string;
    slug: string;
    version?: string;
    baseUrl?: string;
    force?: boolean;
    forceInstall?: boolean;
    logger?: Logger;
    config?: OpenClawConfig;
}): Promise<InstallClawHubSkillResult>;
export declare function updateSkillsFromClawHub(params: {
    workspaceDir: string;
    slug?: string;
    baseUrl?: string;
    forceInstall?: boolean;
    logger?: Logger;
    config?: OpenClawConfig;
}): Promise<UpdateClawHubSkillResult[]>;
export declare function readTrackedClawHubSkillSlugs(workspaceDir: string): Promise<string[]>;
export declare function untrackClawHubSkill(workspaceDir: string, slug: string): Promise<void>;
export {};

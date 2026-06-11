export declare function isRegularNonSymlinkFile(filePath: string): Promise<boolean>;
export declare function resolveTrajectoryRuntimeFile(params: {
    runtimeFile?: string;
    sessionFile: string;
    sessionId: string;
}): Promise<string | undefined>;

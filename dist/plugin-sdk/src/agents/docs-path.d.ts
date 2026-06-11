export declare const OPENCLAW_DOCS_URL = "https://docs.openclaw.ai";
export declare const OPENCLAW_SOURCE_URL = "https://github.com/openclaw/openclaw";
type ResolveOpenClawReferencePathParams = {
    workspaceDir?: string;
    argv1?: string;
    cwd?: string;
    moduleUrl?: string;
};
/** Resolve a usable local docs directory, preferring the active workspace. */
export declare function resolveOpenClawDocsPath(params: {
    workspaceDir?: string;
    argv1?: string;
    cwd?: string;
    moduleUrl?: string;
}): Promise<string | null>;
/** Resolve the package root only when it is a Git checkout. */
export declare function resolveOpenClawSourcePath(params: ResolveOpenClawReferencePathParams): Promise<string | null>;
/** Resolve docs and source roots concurrently for prompt/reference injection. */
export declare function resolveOpenClawReferencePaths(params: ResolveOpenClawReferencePathParams): Promise<{
    docsPath: string | null;
    sourcePath: string | null;
}>;
export {};

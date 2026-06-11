/**
 * Resolve package-manager commands that Windows exposes through .cmd shims.
 * Explicit extensions are preserved so callers can pass already-resolved tools.
 */
export declare function resolveWindowsCommandShim(params: {
    command: string;
    cmdCommands: readonly string[];
    platform?: NodeJS.Platform;
}): string;

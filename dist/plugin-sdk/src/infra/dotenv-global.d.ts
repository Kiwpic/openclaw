/** Load global runtime dotenv files into `process.env` with first-wins precedence. */
export declare function loadGlobalRuntimeDotEnvFiles(opts?: {
    quiet?: boolean;
    stateEnvPath?: string;
}): void;

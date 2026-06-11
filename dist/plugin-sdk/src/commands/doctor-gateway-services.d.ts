import { type OpenClawConfig } from "../config/config.js";
import type { RuntimeEnv } from "../runtime.js";
import type { DoctorOptions, DoctorPrompter } from "./doctor-prompter.js";
/**
 * Audits and optionally rewrites the installed local gateway service configuration.
 *
 * The repair preserves managed env sources, avoids Nix/remote installs, and can stage service
 * updates during updater repair mode instead of immediately installing them.
 */
export declare function maybeRepairGatewayServiceConfig(cfg: OpenClawConfig, mode: "local" | "remote", runtime: RuntimeEnv, prompter: DoctorPrompter, options?: {
    allowExecSecretRefs?: boolean;
}): Promise<void>;
/**
 * Reports duplicate gateway-like services and removes legacy user services after confirmation.
 */
export declare function maybeScanExtraGatewayServices(options: DoctorOptions, runtime: RuntimeEnv, prompter: DoctorPrompter): Promise<void>;

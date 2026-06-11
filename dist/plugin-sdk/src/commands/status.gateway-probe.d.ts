import type { OpenClawConfig } from "../config/types.openclaw.js";
export { pickGatewaySelfPresence } from "./gateway-presence.js";
/** Resolves gateway probe auth plus any non-secret warning about credential lookup. */
export declare function resolveGatewayProbeAuthResolution(cfg: OpenClawConfig): Promise<{
    auth: {
        token?: string;
        password?: string;
    };
    warning?: string;
}>;
/** Resolves only gateway probe auth material for callers that do not display warnings. */
export declare function resolveGatewayProbeAuth(cfg: OpenClawConfig): Promise<{
    token?: string;
    password?: string;
}>;

import { type TSchema } from "typebox";
import type { DeliveryContext } from "../../utils/delivery-context.shared.js";
import { type AnyAgentTool } from "./common.js";
import { callGatewayTool } from "./gateway.js";
export declare function createCronToolSchema(): TSchema;
export declare const CronToolSchema: TSchema;
type CronToolOptions = {
    agentSessionKey?: string;
    currentDeliveryContext?: DeliveryContext;
    selfRemoveOnlyJobId?: string;
};
type GatewayToolCaller = typeof callGatewayTool;
type CronToolDeps = {
    callGatewayTool?: GatewayToolCaller;
};
export declare function createCronTool(opts?: CronToolOptions, deps?: CronToolDeps): AnyAgentTool;
export {};

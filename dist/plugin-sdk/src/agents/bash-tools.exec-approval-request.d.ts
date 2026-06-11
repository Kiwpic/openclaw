import type { ExecApprovalCommandSpan, ExecAsk, ExecSecurity, SystemRunApprovalPlan } from "../infra/exec-approvals.js";
/** Gateway payload fields used to register or wait for an exec approval decision. */
export type RequestExecApprovalDecisionParams = {
    id: string;
    command?: string;
    commandArgv?: string[];
    systemRunPlan?: SystemRunApprovalPlan;
    env?: Record<string, string>;
    cwd: string | undefined;
    nodeId?: string;
    host: "gateway" | "node";
    security: ExecSecurity;
    ask: ExecAsk;
    warningText?: string;
    commandSpans?: ExecApprovalCommandSpan[];
    agentId?: string;
    resolvedPath?: string;
    sessionKey?: string;
    turnSourceChannel?: string;
    turnSourceTo?: string;
    turnSourceAccountId?: string;
    turnSourceThreadId?: string | number;
    requireDeliveryRoute?: boolean;
    suppressDelivery?: boolean;
};
/** Registration result returned before an approval decision is available. */
export type ExecApprovalRegistration = {
    id: string;
    expiresAtMs: number;
    finalDecision?: string | null;
};
/** Registers a two-phase exec approval request with the gateway. */
export declare function registerExecApprovalRequest(params: RequestExecApprovalDecisionParams): Promise<ExecApprovalRegistration>;
/** Waits for a registered approval decision, returning null when it expires. */
export declare function waitForExecApprovalDecision(id: string): Promise<string | null>;
/** Uses a pre-resolved decision or waits for the registered approval id. */
export declare function resolveRegisteredExecApprovalDecision(params: {
    approvalId: string;
    preResolvedDecision: string | null | undefined;
}): Promise<string | null>;
/** Registers an approval request and waits unless the gateway returned a final decision. */
export declare function requestExecApprovalDecision(params: RequestExecApprovalDecisionParams): Promise<string | null>;
type HostExecApprovalParams = {
    approvalId: string;
    command?: string;
    commandArgv?: string[];
    systemRunPlan?: SystemRunApprovalPlan;
    env?: Record<string, string>;
    workdir: string | undefined;
    host: "gateway" | "node";
    nodeId?: string;
    security: ExecSecurity;
    ask: ExecAsk;
    warningText?: string;
    commandSpans?: ExecApprovalCommandSpan[];
    commandHighlighting?: boolean;
    agentId?: string;
    resolvedPath?: string;
    sessionKey?: string;
    turnSourceChannel?: string;
    turnSourceTo?: string;
    turnSourceAccountId?: string;
    turnSourceThreadId?: string | number;
    requireDeliveryRoute?: boolean;
    suppressDelivery?: boolean;
};
type ExecApprovalRequesterContext = {
    agentId?: string;
    sessionKey?: string;
};
/** Builds requester identity context for an approval payload. */
export declare function buildExecApprovalRequesterContext(params: ExecApprovalRequesterContext): {
    agentId?: string;
    sessionKey?: string;
};
type ExecApprovalTurnSourceContext = {
    turnSourceChannel?: string;
    turnSourceTo?: string;
    turnSourceAccountId?: string;
    turnSourceThreadId?: string | number;
};
/** Builds originating channel context for approval delivery/routing. */
export declare function buildExecApprovalTurnSourceContext(params: ExecApprovalTurnSourceContext): ExecApprovalTurnSourceContext;
/** Requests and waits for an approval decision for host/node exec. */
export declare function requestExecApprovalDecisionForHost(params: HostExecApprovalParams): Promise<string | null>;
/** Registers a host/node approval request without waiting for a decision. */
export declare function registerExecApprovalRequestForHost(params: HostExecApprovalParams): Promise<ExecApprovalRegistration>;
/** Registers a host/node approval request and wraps failures for exec callers. */
export declare function registerExecApprovalRequestForHostOrThrow(params: HostExecApprovalParams): Promise<ExecApprovalRegistration>;
export {};

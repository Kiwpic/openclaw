/**
 * Shared agent run termination constants.
 *
 * Runtime and stream consumers use these stable literals to recognize user or
 * controller aborts without matching free-form error text.
 */
/** Stop reason emitted when an agent run is aborted. */
export declare const AGENT_RUN_ABORTED_STOP_REASON: "aborted";
/** Error text used for aborted agent runs. */
export declare const AGENT_RUN_ABORTED_ERROR: "agent run aborted";
/** Returns whether a stop reason is the stable aborted-run reason. */
export declare function isAbortedAgentStopReason(value: unknown): value is typeof AGENT_RUN_ABORTED_STOP_REASON;

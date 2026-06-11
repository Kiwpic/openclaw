import { normalizeToolParameterSchema, type ToolParameterSchemaOptions } from "./agent-tools-parameter-schema.js";
import type { AnyAgentTool } from "./agent-tools.types.js";
export { normalizeToolParameterSchema };
/** Normalize a tool's parameter schema for the selected provider/model. */
export declare function normalizeToolParameters(tool: AnyAgentTool, options?: ToolParameterSchemaOptions): AnyAgentTool;
/**
 * @deprecated Use normalizeToolParameters with modelProvider instead.
 * This function should only be used for Gemini providers.
 */
export declare function cleanToolSchemaForGemini(schema: Record<string, unknown>): unknown;

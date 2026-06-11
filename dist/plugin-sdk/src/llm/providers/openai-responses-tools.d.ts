import type { Tool as OpenAITool } from "openai/resources/responses/responses.js";
import type { Model, Tool } from "../types.js";
/** Options for converting internal tool schemas to OpenAI Responses function tools. */
export interface ConvertResponsesToolsOptions {
    strict?: boolean | null;
    model?: Model;
    supportsStrictMode?: boolean;
}
/** Converts tools to deterministic OpenAI Responses function tool definitions. */
export declare function convertResponsesTools(tools: Tool[], options?: ConvertResponsesToolsOptions): OpenAITool[];

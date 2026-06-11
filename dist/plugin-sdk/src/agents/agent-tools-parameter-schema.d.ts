import type { TSchema } from "typebox";
import type { ModelCompatConfig } from "../config/types.models.js";
export type ToolParameterSchemaOptions = {
    modelProvider?: string;
    modelId?: string;
    modelCompat?: ModelCompatConfig;
};
/** Inline local $ref pointers so providers receive self-contained tool schemas. */
export declare function inlineLocalToolSchemaRefs(schema: unknown): TSchema;
/** Return a provider-compatible JSON schema for a model-facing tool. */
export declare function normalizeToolParameterSchema(schema: unknown, options?: ToolParameterSchemaOptions): TSchema;

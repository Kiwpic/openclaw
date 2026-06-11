/**
 * Projects agent tool schemas into JSON-safe runtime shapes and diagnostics.
 * Provider/runtime dispatch uses this module to drop incompatible tools before
 * sending schemas to model APIs.
 */
import type { AnyAgentTool } from "./tools/common.js";
/** JSON-safe schema value used when projecting runtime tool parameters. */
export type RuntimeToolInputSchemaJson = null | boolean | number | string | RuntimeToolInputSchemaJson[] | {
    [key: string]: RuntimeToolInputSchemaJson;
};
/** Projected runtime tool schema plus validation violations. */
export type RuntimeToolInputSchemaProjection = {
    readonly schema: RuntimeToolInputSchemaJson;
    readonly violations: readonly string[];
};
/** Diagnostic for one incompatible runtime tool schema. */
export type RuntimeToolSchemaDiagnostic = {
    readonly toolName: string;
    readonly toolIndex: number;
    readonly violations: readonly string[];
};
/** Runtime tool list split into compatible tools and schema diagnostics. */
export type RuntimeToolSchemaInspection<TTool extends Pick<AnyAgentTool, "name" | "parameters">> = {
    readonly tools: readonly TTool[];
    readonly diagnostics: readonly RuntimeToolSchemaDiagnostic[];
};
/** Projects one runtime tool input schema to JSON and reports runtime incompatibilities. */
export declare function projectRuntimeToolInputSchema(schema: unknown, path?: string): RuntimeToolInputSchemaProjection;
/** Inspects runtime tool schemas and returns diagnostics without filtering tools. */
export declare function inspectRuntimeToolInputSchemas(tools: readonly Pick<AnyAgentTool, "name" | "parameters">[]): RuntimeToolSchemaDiagnostic[];
/** Filters tools to those with schemas accepted by the runtime as-is. */
export declare function filterRuntimeCompatibleTools<TTool extends Pick<AnyAgentTool, "name" | "parameters">>(tools: readonly TTool[]): RuntimeToolSchemaInspection<TTool>;
/** Filters tools to those that providers can normalize before dispatch. */
export declare function filterProviderNormalizableTools<TTool extends Pick<AnyAgentTool, "name" | "parameters">>(tools: readonly TTool[]): RuntimeToolSchemaInspection<TTool>;

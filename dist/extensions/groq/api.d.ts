import { o as ModelCompatConfig } from "../../types.models-C7xuGz22.js";
//#region extensions/groq/api.d.ts
declare function resolveGroqReasoningCompatPatch(modelId: string): Pick<ModelCompatConfig, "supportsReasoningEffort" | "supportedReasoningEfforts" | "reasoningEffortMap"> | null;
//#endregion
export { resolveGroqReasoningCompatPatch };
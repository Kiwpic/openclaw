import { i as OpenClawConfig } from "./types.openclaw-C8mNEQ_D.js";
import { kr as AgentToolResult } from "./index-CFFuyfQR.js";
//#region extensions/discord/src/actions/runtime.d.ts
declare function handleDiscordAction(params: Record<string, unknown>, cfg: OpenClawConfig, options?: {
  mediaAccess?: {
    localRoots?: readonly string[];
    readFile?: (filePath: string) => Promise<Buffer>;
    workspaceDir?: string;
  };
  mediaLocalRoots?: readonly string[];
  mediaReadFile?: (filePath: string) => Promise<Buffer>;
}): Promise<AgentToolResult<unknown>>;
//#endregion
export { handleDiscordAction as t };
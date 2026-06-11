import { i as OpenClawConfig } from "../types.openclaw-C8mNEQ_D.js";
import { n as MsgContext } from "../templating-VE1b5M1p.js";
import { d as MediaUnderstandingOutput, f as MediaUnderstandingProvider, u as MediaUnderstandingDecision } from "../types-DBaLQoD5.js";
import { t as ActiveMediaModel } from "../active-model-Cxn6sQSw.js";

//#region src/media-understanding/apply.d.ts
type ApplyMediaUnderstandingResult = {
  outputs: MediaUnderstandingOutput[];
  decisions: MediaUnderstandingDecision[];
  appliedImage: boolean;
  appliedAudio: boolean;
  appliedVideo: boolean;
  appliedFile: boolean;
};
declare function applyMediaUnderstanding(params: {
  ctx: MsgContext;
  cfg: OpenClawConfig;
  agentId?: string;
  agentDir?: string;
  workspaceDir?: string;
  providers?: Record<string, MediaUnderstandingProvider>;
  activeModel?: ActiveMediaModel;
}): Promise<ApplyMediaUnderstandingResult>;
//#endregion
export { applyMediaUnderstanding };
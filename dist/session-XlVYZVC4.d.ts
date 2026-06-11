import { n as MsgContext } from "./templating-VE1b5M1p.js";
import { n as GroupKeyResolution } from "./types-BUVk55v-.js";
import { t as InboundLastRouteUpdate } from "./session.types-CRvJc4qU.js";

//#region src/channels/session.d.ts
declare function recordInboundSession(params: {
  storePath: string;
  sessionKey: string;
  ctx: MsgContext;
  groupResolution?: GroupKeyResolution | null;
  createIfMissing?: boolean;
  updateLastRoute?: InboundLastRouteUpdate;
  onRecordError: (err: unknown) => void;
  trackSessionMetaTask?: (task: Promise<unknown>) => void;
}): Promise<void>;
//#endregion
export { recordInboundSession as t };
import "./paths-NEwU8m3X.js";
import { t as loadSessionStore$1 } from "./store-load-Dck9nI8T.js";
import "./store-DzYHq4iO.js";
import "./reset-BPxXM_vx.js";
import "./session-key-CDTkhtVe.js";
import "./transcript-CNbfynAP.js";
import "./send-policy-CfC5ATxp.js";
//#region src/plugin-sdk/session-store-runtime.ts
/**
* @deprecated Use getSessionEntry/listSessionEntries for reads and
* patchSessionEntry/upsertSessionEntry for writes. loadSessionStore keeps the
* legacy mutable whole-store shape and will remain a compatibility escape hatch.
*/
const loadSessionStore = loadSessionStore$1;
//#endregion
export { loadSessionStore as t };

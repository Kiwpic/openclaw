import type { MsgContext } from "../auto-reply/templating.js";
/** Validates trusted sender identity fields before channel contexts reach plugins/tools. */
export declare function validateSenderIdentity(ctx: MsgContext): string[];

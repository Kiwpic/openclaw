import type { Api, Model } from "../llm/types.js";
/** Custom API id for the Google simple-completion stream adapter. */
export declare const GOOGLE_SIMPLE_COMPLETION_API: Api;
/** Rewrites Google generative-ai models to the simple-completion adapter when needed. */
export declare function prepareGoogleSimpleCompletionModel<TApi extends Api>(model: Model<TApi>): Model;

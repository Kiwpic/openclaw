import { cn as ProviderPlugin } from "./types-Cqh78_VH.js";
import { g as OpenClawPluginApi } from "./plugin-entry-Dw44CWny.js";
//#region extensions/anthropic/register.runtime.d.ts
/** Build the full Anthropic provider descriptor used by runtime registration. */
declare function buildAnthropicProvider(): ProviderPlugin;
/** Register Anthropic provider, Claude CLI backend, and media understanding provider. */
declare function registerAnthropicPlugin(api: OpenClawPluginApi): void;
//#endregion
export { registerAnthropicPlugin as n, buildAnthropicProvider as t };
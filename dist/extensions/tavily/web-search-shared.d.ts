import { Js as WebSearchProviderPlugin } from "../../types-Cqh78_VH.js";
//#region extensions/tavily/web-search-shared.d.ts
declare const TAVILY_CREDENTIAL_PATH = "plugins.entries.tavily.config.webSearch.apiKey";
declare function buildTavilyWebSearchProviderBase(): Omit<WebSearchProviderPlugin, "createTool">;
//#endregion
export { TAVILY_CREDENTIAL_PATH, buildTavilyWebSearchProviderBase };
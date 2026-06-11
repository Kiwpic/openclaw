import { p as resolveProviderHttpRequestConfig } from "./shared-DPseBiq5.js";
import "./provider-http-Z5-BE8vv.js";
import "./thinking-api-DNM9wbUx.js";
import { o as normalizeGoogleGenerativeAiBaseUrl, t as DEFAULT_GOOGLE_API_BASE_URL } from "./provider-policy-BwI9YX4L.js";
import "./gemini-cli-provider-CF3OJRbh.js";
import "./onboard-wh8yEM2N.js";
import { t as parseGeminiAuth } from "./gemini-auth-DPlQVZZL.js";
import "./transport-stream-BF4m1CDD.js";
import "./provider-registration-MiO-9V4H.js";
//#region extensions/google/api.ts
function resolveTrustedGoogleGenerativeAiBaseUrl(baseUrl) {
	const normalized = normalizeGoogleGenerativeAiBaseUrl(baseUrl ?? "https://generativelanguage.googleapis.com/v1beta") ?? "https://generativelanguage.googleapis.com/v1beta";
	let url;
	try {
		url = new URL(normalized);
	} catch {
		throw new Error("Google Generative AI baseUrl must be a valid https URL on generativelanguage.googleapis.com");
	}
	if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "generativelanguage.googleapis.com") throw new Error("Google Generative AI baseUrl must use https://generativelanguage.googleapis.com");
	return normalized;
}
function resolveGoogleGenerativeAiHttpRequestConfig(params) {
	return resolveProviderHttpRequestConfig({
		baseUrl: resolveTrustedGoogleGenerativeAiBaseUrl(params.baseUrl),
		defaultBaseUrl: DEFAULT_GOOGLE_API_BASE_URL,
		allowPrivateNetwork: params.request?.allowPrivateNetwork,
		headers: params.headers,
		request: params.request,
		defaultHeaders: parseGeminiAuth(params.apiKey).headers,
		provider: "google",
		api: "google-generative-ai",
		capability: params.capability,
		transport: params.transport
	});
}
//#endregion
export { resolveGoogleGenerativeAiHttpRequestConfig as t };

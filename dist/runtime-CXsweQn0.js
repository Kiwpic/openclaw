import { c as normalizeOptionalString } from "./string-coerce-mnp54Vah.js";
import { C as resolveExpiresAtMsFromDurationMs, S as resolveDateTimestampMs, o as asDateTimestampMs } from "./number-coercion-CJQ8TR--.js";
import { i as formatErrorMessage } from "./errors-BXgSefBE.js";
import { n as ensureAuthProfileStore } from "./store-BuYkRAV1.js";
import "./error-runtime-C8vbtAJt.js";
import "./number-runtime-DBLVDypr.js";
import "./string-coerce-runtime-CEGJWkQ_.js";
import "./provider-auth-FdoUiWLQ.js";
import { b as resolveConfiguredModelNameHint, d as buildFoundryProviderBaseUrl, f as extractFoundryEndpoint, h as isFoundryProviderApi } from "./shared-DoQDrSnv.js";
import { a as getAccessTokenResultAsync } from "./cli-BayIae4v.js";
import { t as getFoundryTokenCacheKey } from "./shared-runtime-BOj18bNu.js";
//#region extensions/microsoft-foundry/runtime.ts
const cachedTokens = /* @__PURE__ */ new Map();
const refreshPromises = /* @__PURE__ */ new Map();
const FOUNDRY_TOKEN_FALLBACK_LIFETIME_MS = 3300 * 1e3;
function resetFoundryRuntimeAuthCaches() {
	cachedTokens.clear();
	refreshPromises.clear();
}
async function refreshEntraToken(params) {
	const result = await getAccessTokenResultAsync(params);
	const rawExpiry = result.expiresOn ? new Date(result.expiresOn).getTime() : NaN;
	const now = resolveDateTimestampMs(Date.now());
	const expiresAt = asDateTimestampMs(rawExpiry) ?? resolveExpiresAtMsFromDurationMs(FOUNDRY_TOKEN_FALLBACK_LIFETIME_MS, { nowMs: now }) ?? now;
	cachedTokens.set(getFoundryTokenCacheKey(params), {
		token: result.accessToken,
		expiresAt
	});
	return {
		apiKey: result.accessToken,
		expiresAt
	};
}
async function prepareFoundryRuntimeAuth(ctx) {
	if (ctx.apiKey !== "__entra_id_dynamic__") return null;
	try {
		const authStore = ensureAuthProfileStore(ctx.agentDir, { allowKeychainPrompt: false });
		const credential = ctx.profileId ? authStore.profiles[ctx.profileId] : void 0;
		const metadata = credential?.type === "api_key" ? credential.metadata : void 0;
		const modelId = normalizeOptionalString(ctx.modelId) ?? normalizeOptionalString(metadata?.modelId) ?? ctx.modelId;
		const activeModelNameHint = ctx.modelId === metadata?.modelId ? metadata?.modelName : void 0;
		const modelNameHint = resolveConfiguredModelNameHint(modelId, ctx.model.name ?? activeModelNameHint);
		const configuredApi = typeof metadata?.api === "string" && isFoundryProviderApi(metadata.api) ? metadata.api : isFoundryProviderApi(ctx.model.api) ? ctx.model.api : void 0;
		const endpoint = normalizeOptionalString(metadata?.endpoint) ?? extractFoundryEndpoint(ctx.model.baseUrl ?? "");
		const baseUrl = endpoint ? buildFoundryProviderBaseUrl(endpoint, modelId, modelNameHint, configuredApi) : void 0;
		const cacheKey = getFoundryTokenCacheKey({
			subscriptionId: metadata?.subscriptionId,
			tenantId: metadata?.tenantId
		});
		const cachedToken = cachedTokens.get(cacheKey);
		const rawNow = Date.now();
		const hasValidClock = asDateTimestampMs(rawNow) !== void 0;
		const now = resolveDateTimestampMs(rawNow);
		const refreshAfterMs = resolveExpiresAtMsFromDurationMs(3e5, { nowMs: now }) ?? now;
		if (cachedToken && hasValidClock && cachedToken.expiresAt > refreshAfterMs) return {
			apiKey: cachedToken.token,
			expiresAt: cachedToken.expiresAt,
			...baseUrl ? { baseUrl } : {}
		};
		let refreshPromise = refreshPromises.get(cacheKey);
		if (!refreshPromise) {
			refreshPromise = refreshEntraToken({
				subscriptionId: metadata?.subscriptionId,
				tenantId: metadata?.tenantId
			}).finally(() => {
				refreshPromises.delete(cacheKey);
			});
			refreshPromises.set(cacheKey, refreshPromise);
		}
		return {
			...await refreshPromise,
			...baseUrl ? { baseUrl } : {}
		};
	} catch (err) {
		const details = formatErrorMessage(err);
		throw new Error(`Failed to refresh Azure Entra ID token via az CLI: ${details}`, { cause: err });
	}
}
//#endregion
export { resetFoundryRuntimeAuthCaches as n, prepareFoundryRuntimeAuth as t };

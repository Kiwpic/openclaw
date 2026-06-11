import { t as getProviderEnvVars } from "./provider-env-vars-BDsn4OJY.js";
import { n as listMemoryEmbeddingProviders, r as listRegisteredMemoryEmbeddingProviderAdapters } from "./memory-embedding-provider-runtime-Dh6Bx2L6.js";
import "./memory-core-host-embedding-registry-C7a5R_Zq.js";
import "./provider-env-vars-DW8w555E.js";
//#region extensions/memory-core/src/memory/provider-adapter-registration.ts
function filterUnregisteredMemoryEmbeddingProviderAdapters(params) {
	const existingIds = new Set(params.registeredAdapters.map((adapter) => adapter.id));
	return params.builtinAdapters.filter((adapter) => !existingIds.has(adapter.id));
}
//#endregion
//#region extensions/memory-core/src/memory/provider-adapters.ts
const builtinMemoryEmbeddingProviderAdapters = [];
function getBuiltinMemoryEmbeddingProviderAdapter(id) {
	return listMemoryEmbeddingProviders().find((adapter) => adapter.id === id);
}
function registerBuiltInMemoryEmbeddingProviders(register) {
	for (const adapter of filterUnregisteredMemoryEmbeddingProviderAdapters({
		builtinAdapters: builtinMemoryEmbeddingProviderAdapters,
		registeredAdapters: listRegisteredMemoryEmbeddingProviderAdapters()
	})) register.registerMemoryEmbeddingProvider(adapter);
}
function getBuiltinMemoryEmbeddingProviderDoctorMetadata(providerId) {
	const adapter = getBuiltinMemoryEmbeddingProviderAdapter(providerId);
	if (!adapter) return null;
	const authProviderId = adapter.authProviderId ?? adapter.id;
	return {
		providerId: adapter.id,
		authProviderId,
		envVars: getProviderEnvVars(authProviderId),
		transport: adapter.transport === "local" ? "local" : "remote",
		autoSelectPriority: adapter.autoSelectPriority
	};
}
function listBuiltinAutoSelectMemoryEmbeddingProviderDoctorMetadata() {
	return listMemoryEmbeddingProviders().filter((adapter) => typeof adapter.autoSelectPriority === "number").toSorted((a, b) => (a.autoSelectPriority ?? 0) - (b.autoSelectPriority ?? 0)).map((adapter) => {
		const authProviderId = adapter.authProviderId ?? adapter.id;
		return {
			providerId: adapter.id,
			authProviderId,
			envVars: getProviderEnvVars(authProviderId),
			transport: adapter.transport === "local" ? "local" : "remote",
			autoSelectPriority: adapter.autoSelectPriority
		};
	});
}
//#endregion
export { listBuiltinAutoSelectMemoryEmbeddingProviderDoctorMetadata as n, registerBuiltInMemoryEmbeddingProviders as r, getBuiltinMemoryEmbeddingProviderDoctorMetadata as t };

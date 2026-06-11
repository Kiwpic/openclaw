import { t as resolveMemoryBackendConfig } from "./backend-config-D2rM69yE.js";
import "./memory-core-host-runtime-files-DLYzKxoA.js";
import { n as closeMemorySearchManager, r as getMemorySearchManager, t as closeAllMemorySearchManagers } from "./memory-CDjoEi8j.js";
//#region extensions/memory-core/src/runtime-provider.ts
const memoryRuntime = {
	async getMemorySearchManager(params) {
		const { manager, error } = await getMemorySearchManager(params);
		return {
			manager,
			error
		};
	},
	resolveMemoryBackendConfig(params) {
		return resolveMemoryBackendConfig(params);
	},
	async closeAllMemorySearchManagers() {
		await closeAllMemorySearchManagers();
	},
	async closeMemorySearchManager(params) {
		await closeMemorySearchManager(params);
	}
};
//#endregion
export { memoryRuntime as t };

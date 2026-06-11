import "./errors-xz3P9oAm.js";
import { n as testing$1 } from "./manager-Aws8tXnd.js";
import { i as testing$2 } from "./registry-3G15-2Jg.js";
import "./session-meta-M7RjxPxL.js";
import "./acp-runtime-backend-970i2KZk.js";
//#region src/plugin-sdk/acp-runtime.ts
/** Lazy ACP test helper facade combining control-plane and runtime registry helpers. */
const testing = new Proxy({}, {
	get(_target, prop, receiver) {
		if (Reflect.has(testing$1, prop)) return Reflect.get(testing$1, prop, receiver);
		return Reflect.get(testing$2, prop, receiver);
	},
	has(_target, prop) {
		return Reflect.has(testing$1, prop) || Reflect.has(testing$2, prop);
	},
	ownKeys() {
		return Array.from(new Set([...Reflect.ownKeys(testing$1), ...Reflect.ownKeys(testing$2)]));
	},
	getOwnPropertyDescriptor(_target, prop) {
		if (Reflect.has(testing$1, prop) || Reflect.has(testing$2, prop)) return {
			configurable: true,
			enumerable: true
		};
	}
});
//#endregion
export { testing as t };

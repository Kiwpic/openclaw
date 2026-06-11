import { t as getMatrixScopedEnvVarNames } from "./env-vars-Gd1yKtzb.js";
import { i as resolveScopedMatrixEnvConfig, r as resolveMatrixEnvAuthReadiness, t as hasReadyMatrixEnvAuth } from "./env-auth-B_5QIHM9.js";
import { n as validateMatrixHomeserverUrl, t as resolveValidatedMatrixHomeserverUrl } from "./url-validation-Ck23jxmT.js";
import { t as isBunRuntime } from "./runtime-BefyhPWv.js";
import { i as resolveMatrixConfigForAccount, n as resolveMatrixAuth, r as resolveMatrixAuthContext, t as backfillMatrixAuthDeviceIdAfterStartup } from "./config-Baz-wy70.js";
import { t as createMatrixClient } from "./create-client-cqM8MBod.js";
import { i as resolveSharedMatrixClient, n as releaseSharedClientInstance, o as stopSharedClientForAccount, r as removeSharedClientInstance, s as stopSharedClientInstance, t as acquireSharedMatrixClient } from "./shared-C7Dzu73w.js";
import "./client-DZ64gHaM.js";
export { acquireSharedMatrixClient, backfillMatrixAuthDeviceIdAfterStartup, createMatrixClient, getMatrixScopedEnvVarNames, hasReadyMatrixEnvAuth, isBunRuntime, releaseSharedClientInstance, removeSharedClientInstance, resolveMatrixAuth, resolveMatrixAuthContext, resolveMatrixConfigForAccount, resolveMatrixEnvAuthReadiness, resolveScopedMatrixEnvConfig, resolveSharedMatrixClient, resolveValidatedMatrixHomeserverUrl, stopSharedClientForAccount, stopSharedClientInstance, validateMatrixHomeserverUrl };

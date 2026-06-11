import { i as OpenClawConfig } from "./types.openclaw-BnYC9Nsr.js";
import { d as SecretInput } from "./types.secrets-rAcqRhcN.js";
import { Tl as upsertAuthProfileWithLock, wl as upsertAuthProfile } from "./types-DDKC2NLO.js";
import { a as upsertApiKeyProfile, i as buildApiKeyCredential, r as applyAuthProfileConfig, t as ApiKeyStorageOptions } from "./provider-auth-helpers-DKZVQuMd.js";
import { a as normalizeSecretInputModeInput, c as promptSecretRefForSetup, i as normalizeApiKeyInput, n as ensureApiKeyFromOptionEnvOrPrompt, o as validateApiKeyInput, r as formatApiKeyPreview, s as resolveSecretInputModeForEnvSelection } from "./provider-auth-input-Dv73WtWT.js";
import { t as createProviderApiKeyAuthMethod } from "./provider-api-key-auth-qlo5DTw-.js";
import { n as normalizeSecretInput, t as normalizeOptionalSecretInput } from "./normalize-secret-input-DuM-MDGm.js";
export { type ApiKeyStorageOptions, type OpenClawConfig, type SecretInput, applyAuthProfileConfig, buildApiKeyCredential, createProviderApiKeyAuthMethod, ensureApiKeyFromOptionEnvOrPrompt, formatApiKeyPreview, normalizeApiKeyInput, normalizeOptionalSecretInput, normalizeSecretInput, normalizeSecretInputModeInput, promptSecretRefForSetup, resolveSecretInputModeForEnvSelection, upsertApiKeyProfile, upsertAuthProfile, upsertAuthProfileWithLock, validateApiKeyInput };
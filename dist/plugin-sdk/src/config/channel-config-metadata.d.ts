/**
 * Converts plugin manifest metadata into deterministic config UI metadata for docs, validation, and runtime schema.
 * When multiple plugin origins expose the same id/channel, the closest origin owns the surfaced schema.
 */
import type { PluginManifestRegistry } from "../plugins/manifest-registry.js";
import type { ChannelUiMetadata, PluginUiMetadata } from "./schema.js";
/** Collects plugin config UI metadata with deterministic origin precedence and output ordering. */
export declare function collectPluginSchemaMetadata(registry: PluginManifestRegistry): PluginUiMetadata[];
/** Collects per-channel config UI metadata from plugin manifests and channel config blocks. */
export declare function collectChannelSchemaMetadata(registry: PluginManifestRegistry): ChannelUiMetadata[];

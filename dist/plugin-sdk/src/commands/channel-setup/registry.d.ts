import type { ChannelPlugin } from "../../channels/plugins/types.plugin.js";
import type { ChannelChoice } from "../onboard-types.js";
import type { ChannelSetupWizardAdapter } from "./types.js";
/** Resolve the setup wizard adapter exposed by one channel plugin, caching declarative adapters. */
export declare function resolveChannelSetupWizardAdapterForPlugin(plugin?: ChannelPlugin): ChannelSetupWizardAdapter | undefined;
/** Look up the setup wizard adapter for a registered setup channel. */
export declare function getChannelSetupWizardAdapter(channel: ChannelChoice): ChannelSetupWizardAdapter | undefined;

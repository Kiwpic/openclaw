import { u as ChannelDirectoryEntry } from "../../types.core-FIbwi2ME.js";
import { t as DirectoryConfigParams } from "../../directory-types-BcEBbhjt.js";
import { n as listDiscordDirectoryPeersFromConfig, t as listDiscordDirectoryGroupsFromConfig } from "../../directory-config-CUpIGI8q.js";
//#region extensions/discord/directory-contract-api.d.ts
declare const discordDirectoryContractPlugin: {
  id: string;
  directory: {
    listPeers: (configParams: DirectoryConfigParams) => Promise<ChannelDirectoryEntry[]>;
    listGroups: (configParams: DirectoryConfigParams) => Promise<ChannelDirectoryEntry[]>;
  };
};
//#endregion
export { discordDirectoryContractPlugin, listDiscordDirectoryGroupsFromConfig, listDiscordDirectoryPeersFromConfig };
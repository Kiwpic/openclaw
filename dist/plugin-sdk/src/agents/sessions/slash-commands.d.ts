import type { SourceInfo } from "./source-info.js";
export type SlashCommandSource = "extension" | "prompt" | "skill";
export interface SlashCommandInfo {
    name: string;
    description?: string;
    source: SlashCommandSource;
    sourceInfo: SourceInfo;
}
export interface BuiltinSlashCommand {
    name: string;
    description: string;
}
/** Built-in TUI slash commands that exist even when no prompt/skill packages are loaded. */
export declare const BUILTIN_SLASH_COMMANDS: ReadonlyArray<BuiltinSlashCommand>;

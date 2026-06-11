import type { Command } from "commander";
/** Descriptor for one root command placeholder. */
export type NamedCommandDescriptor = {
    name: string;
    description: string;
    hasSubcommands: boolean;
    parentDefaultHelp?: boolean;
};
/** Group spec that names the placeholders owned by one registrar. */
export type CommandGroupDescriptorSpec<TRegister> = {
    commandNames: readonly string[];
    register: TRegister;
};
/** Import-backed command group definition. */
export type ImportedCommandGroupDefinition<TRegisterArgs, TModule> = {
    commandNames: readonly string[];
    loadModule: () => Promise<TModule>;
    register: (module: TModule, args: TRegisterArgs) => Promise<void> | void;
};
/** Resolved group entry after descriptor lookup. */
export type ResolvedCommandGroupEntry<TDescriptor extends NamedCommandDescriptor, TRegister> = {
    placeholders: TDescriptor[];
    register: TRegister;
};
type CommandGroupEntryLike = {
    placeholders: NamedCommandDescriptor[];
    register: (program: Command) => Promise<void> | void;
};
/** Resolve named command-group specs into descriptor-backed entries. */
export declare function resolveCommandGroupEntries<TDescriptor extends NamedCommandDescriptor, TRegister>(descriptors: readonly TDescriptor[], specs: readonly CommandGroupDescriptorSpec<TRegister>[]): ResolvedCommandGroupEntry<TDescriptor, TRegister>[];
/** Build lazy command-group entries with a mapped program registrar. */
export declare function buildCommandGroupEntries<TRegister>(descriptors: readonly NamedCommandDescriptor[], specs: readonly CommandGroupDescriptorSpec<TRegister>[], mapRegister: (register: TRegister) => CommandGroupEntryLike["register"]): CommandGroupEntryLike[];
/** Define a lazy group that imports its module at registration time. */
export declare function defineImportedCommandGroupSpec<TRegisterArgs, TModule>(commandNames: readonly string[], loadModule: () => Promise<TModule>, register: (module: TModule, args: TRegisterArgs) => Promise<void> | void): CommandGroupDescriptorSpec<(args: TRegisterArgs) => Promise<void>>;
/** Map multiple import-backed command group definitions to lazy specs. */
export declare function defineImportedCommandGroupSpecs<TRegisterArgs, TModule>(definitions: readonly ImportedCommandGroupDefinition<TRegisterArgs, TModule>[]): CommandGroupDescriptorSpec<(args: TRegisterArgs) => Promise<void>>[];
type ProgramCommandRegistrar = (program: Command) => Promise<void> | void;
type AnyImportedProgramCommandGroupDefinition = {
    commandNames: readonly string[];
    loadModule: () => Promise<Record<string, unknown>>;
    exportName: string;
};
export type ImportedProgramCommandGroupDefinition<TModule extends Record<TKey, ProgramCommandRegistrar>, TKey extends keyof TModule & string> = {
    commandNames: readonly string[];
    loadModule: () => Promise<TModule>;
    exportName: TKey;
};
/** Define a program-level command group from a module export name. */
export declare function defineImportedProgramCommandGroupSpec<TModule extends Record<TKey, ProgramCommandRegistrar>, TKey extends keyof TModule & string>(definition: ImportedProgramCommandGroupDefinition<TModule, TKey>): CommandGroupDescriptorSpec<(program: Command) => Promise<void>>;
/** Map program-level imported command definitions to lazy specs with export validation. */
export declare function defineImportedProgramCommandGroupSpecs(definitions: readonly AnyImportedProgramCommandGroupDefinition[]): CommandGroupDescriptorSpec<(program: Command) => Promise<void>>[];
export {};

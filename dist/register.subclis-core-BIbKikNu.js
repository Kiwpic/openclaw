import { _ as getSubCliEntries$1, y as loadPrivateQaCliModule } from "./argv-CnfL__6a.js";
import { t as resolveCliArgvInvocation } from "./argv-invocation-CxGUjPqA.js";
import { t as createLazyImportLoader } from "./lazy-promise-BONnzNfb.js";
import { i as shouldRegisterPrimarySubcommandOnly, n as shouldEagerRegisterSubcommands } from "./command-registration-policy-Bd8lEuIK.js";
import { t as resolveCliCommandPathPolicy } from "./command-path-policy-B0jd3lsl.js";
import { t as removeCommandByName } from "./command-tree-CA1ToIBK.js";
import { i as registerCommandGroups, r as registerCommandGroupByName } from "./register-command-groups-DKyoKsjD.js";
//#region src/cli/program/command-group-descriptors.ts
function buildDescriptorIndex(descriptors) {
	return new Map(descriptors.map((descriptor) => [descriptor.name, descriptor]));
}
/** Resolve named command-group specs into descriptor-backed entries. */
function resolveCommandGroupEntries(descriptors, specs) {
	const descriptorsByName = buildDescriptorIndex(descriptors);
	return specs.map((spec) => ({
		placeholders: spec.commandNames.map((name) => {
			const descriptor = descriptorsByName.get(name);
			if (!descriptor) throw new Error(`Unknown command descriptor: ${name}`);
			return descriptor;
		}),
		register: spec.register
	}));
}
/** Build lazy command-group entries with a mapped program registrar. */
function buildCommandGroupEntries(descriptors, specs, mapRegister) {
	return resolveCommandGroupEntries(descriptors, specs).map((entry) => ({
		placeholders: entry.placeholders,
		register: mapRegister(entry.register)
	}));
}
/** Define a lazy group that imports its module at registration time. */
function defineImportedCommandGroupSpec(commandNames, loadModule, register) {
	return {
		commandNames,
		register: async (args) => {
			await register(await loadModule(), args);
		}
	};
}
/** Map program-level imported command definitions to lazy specs with export validation. */
function defineImportedProgramCommandGroupSpecs(definitions) {
	return definitions.map((definition) => ({
		commandNames: definition.commandNames,
		register: async (program) => {
			const register = (await definition.loadModule())[definition.exportName];
			if (typeof register !== "function") throw new Error(`Missing program command registrar: ${definition.exportName}`);
			await register(program);
		}
	}));
}
//#endregion
//#region src/cli/program/register.subclis-core.ts
const pluginCliLoader = createLazyImportLoader(() => import("./cli-Dj7FEUWo.js"));
function shouldRegisterGatewayRunOnly(name, argv) {
	if (name !== "gateway") return false;
	const invocation = resolveCliArgvInvocation(argv);
	if (invocation.hasHelpOrVersion || invocation.commandPath[0] !== "gateway") return false;
	return invocation.commandPath.length === 1 || invocation.commandPath[1] === "run";
}
async function registerGatewayRunOnly(program) {
	const { addGatewayRunCommand } = await import("./run-command-C4LQUBf7.js");
	removeCommandByName(program, "gateway");
	addGatewayRunCommand(addGatewayRunCommand(program.command("gateway").description("Run, inspect, and query the WebSocket Gateway")).command("run").description("Run the WebSocket Gateway (foreground)"));
}
async function registerSubCliWithPluginCommands(program, argv, registerSubCli, pluginCliPosition) {
	const invocation = resolveCliArgvInvocation(argv);
	const shouldRegisterPluginCommands = !invocation.hasHelpOrVersion && resolveCliCommandPathPolicy(invocation.commandPath).loadPlugins !== "never";
	if (pluginCliPosition === "before" && shouldRegisterPluginCommands) {
		const { registerPluginCliCommandsFromValidatedConfig } = await pluginCliLoader.load();
		await registerPluginCliCommandsFromValidatedConfig(program);
	}
	await registerSubCli();
	if (pluginCliPosition === "after" && shouldRegisterPluginCommands) {
		const { registerPluginCliCommandsFromValidatedConfig } = await pluginCliLoader.load();
		await registerPluginCliCommandsFromValidatedConfig(program);
	}
}
const entrySpecs = [
	...defineImportedProgramCommandGroupSpecs([
		{
			commandNames: ["acp"],
			loadModule: () => import("./acp-cli-BVc6zGWG.js"),
			exportName: "registerAcpCli"
		},
		{
			commandNames: ["gateway"],
			loadModule: () => import("./gateway-cli-CrTmmH49.js"),
			exportName: "registerGatewayCli"
		},
		{
			commandNames: ["daemon"],
			loadModule: () => import("./cli/daemon-cli.js"),
			exportName: "registerDaemonCli"
		},
		{
			commandNames: ["logs"],
			loadModule: () => import("./logs-cli-S8JUgBU_.js"),
			exportName: "registerLogsCli"
		},
		{
			commandNames: ["system"],
			loadModule: () => import("./system-cli-fW_e4dlO.js"),
			exportName: "registerSystemCli"
		},
		{
			commandNames: ["models"],
			loadModule: () => import("./models-cli-CtQP3zGn.js"),
			exportName: "registerModelsCli"
		},
		{
			commandNames: ["infer", "capability"],
			loadModule: () => import("./capability-cli-CWQP9uVb.js"),
			exportName: "registerCapabilityCli"
		},
		{
			commandNames: ["approvals"],
			loadModule: () => import("./exec-approvals-cli-BIX0fid7.js"),
			exportName: "registerExecApprovalsCli"
		},
		{
			commandNames: ["exec-policy"],
			loadModule: () => import("./exec-policy-cli-DyRxOXcJ.js"),
			exportName: "registerExecPolicyCli"
		}
	]),
	{
		commandNames: ["nodes"],
		register: async (program, argv) => {
			await (await import("./nodes-cli-D5aWBV3a.js")).registerNodesCli(program, argv);
		}
	},
	...defineImportedProgramCommandGroupSpecs([
		{
			commandNames: ["devices"],
			loadModule: () => import("./devices-cli-Dj6J02dr.js"),
			exportName: "registerDevicesCli"
		},
		{
			commandNames: ["node"],
			loadModule: () => import("./node-cli-DRLV-hSo.js"),
			exportName: "registerNodeCli"
		},
		{
			commandNames: ["sandbox"],
			loadModule: () => import("./sandbox-cli-CgbEMsgZ.js"),
			exportName: "registerSandboxCli"
		},
		{
			commandNames: [
				"tui",
				"terminal",
				"chat"
			],
			loadModule: () => import("./tui-cli-DLbg7c9Z.js"),
			exportName: "registerTuiCli"
		},
		{
			commandNames: ["cron"],
			loadModule: () => import("./cron-cli-Dua8UPnF.js"),
			exportName: "registerCronCli"
		},
		{
			commandNames: ["dns"],
			loadModule: () => import("./dns-cli-DKHroIIs.js"),
			exportName: "registerDnsCli"
		},
		{
			commandNames: ["docs"],
			loadModule: () => import("./docs-cli-CgoivJrk.js"),
			exportName: "registerDocsCli"
		},
		{
			commandNames: ["qa"],
			loadModule: loadPrivateQaCliModule,
			exportName: "registerQaLabCli"
		},
		{
			commandNames: ["proxy"],
			loadModule: () => import("./proxy-cli-CYBEQb_T.js"),
			exportName: "registerProxyCli"
		},
		{
			commandNames: ["hooks"],
			loadModule: () => import("./hooks-cli-CU5UeY5G.js"),
			exportName: "registerHooksCli"
		},
		{
			commandNames: ["webhooks"],
			loadModule: () => import("./webhooks-cli-C9uCe5e5.js"),
			exportName: "registerWebhooksCli"
		},
		{
			commandNames: ["qr"],
			loadModule: () => import("./qr-cli-H4kqwfRX.js"),
			exportName: "registerQrCli"
		},
		{
			commandNames: ["clawbot"],
			loadModule: () => import("./clawbot-cli-DQ4BjQnA.js"),
			exportName: "registerClawbotCli"
		}
	]),
	{
		commandNames: ["pairing"],
		register: async (program, argv) => {
			await registerSubCliWithPluginCommands(program, argv, async () => {
				(await import("./pairing-cli-B1aiPU3Z.js")).registerPairingCli(program);
			}, "before");
		}
	},
	{
		commandNames: ["plugins"],
		register: async (program, argv) => {
			await registerSubCliWithPluginCommands(program, argv, async () => {
				(await import("./plugins-cli-PAEoztzl.js")).registerPluginsCli(program);
			}, "after");
		}
	},
	{
		commandNames: ["channels"],
		register: async (program, argv, context) => {
			await (await import("./channels-cli-ewo-_r51.js")).registerChannelsCli(program, argv, { includeSetupOptions: context.purpose === "completion" });
		}
	},
	...defineImportedProgramCommandGroupSpecs([
		{
			commandNames: ["directory"],
			loadModule: () => import("./directory-cli-BtjEe23V.js"),
			exportName: "registerDirectoryCli"
		},
		{
			commandNames: ["security"],
			loadModule: () => import("./security-cli-CdMin2Xu.js"),
			exportName: "registerSecurityCli"
		},
		{
			commandNames: ["secrets"],
			loadModule: () => import("./secrets-cli-Co3boMJ-.js"),
			exportName: "registerSecretsCli"
		},
		{
			commandNames: ["skills"],
			loadModule: () => import("./skills-cli-B4VCK_sy.js"),
			exportName: "registerSkillsCli"
		},
		{
			commandNames: ["update"],
			loadModule: () => import("./update-cli-BWLJOnhM.js"),
			exportName: "registerUpdateCli"
		}
	])
];
function resolveSubCliCommandGroups(argv, context = {}) {
	const descriptors = getSubCliEntries$1();
	const descriptorNames = new Set(descriptors.map((descriptor) => descriptor.name));
	return buildCommandGroupEntries(descriptors, entrySpecs.filter((spec) => spec.commandNames.every((name) => descriptorNames.has(name))), (register) => async (program) => {
		await register(program, argv, context);
	});
}
function getSubCliEntries() {
	return getSubCliEntries$1();
}
async function registerSubCliByName(program, name, argv = process.argv, context = {}) {
	if (shouldRegisterGatewayRunOnly(name, argv)) {
		await registerGatewayRunOnly(program);
		return true;
	}
	return registerCommandGroupByName(program, resolveSubCliCommandGroups(argv, context), name);
}
function registerSubCliCommands(program, argv = process.argv) {
	const { primary } = resolveCliArgvInvocation(argv);
	registerCommandGroups(program, resolveSubCliCommandGroups(argv), {
		eager: shouldEagerRegisterSubcommands(),
		primary,
		registerPrimaryOnly: Boolean(primary && shouldRegisterPrimarySubcommandOnly(argv))
	});
}
//#endregion
export { defineImportedCommandGroupSpec as a, buildCommandGroupEntries as i, registerSubCliByName as n, defineImportedProgramCommandGroupSpecs as o, registerSubCliCommands as r, getSubCliEntries as t };

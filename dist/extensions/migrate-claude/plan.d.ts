import { d as MigrationProviderContext, u as MigrationPlan } from "../../plugin-entry-Dw44CWny.js";

//#region extensions/migrate-claude/plan.d.ts
declare function buildClaudePlan(ctx: MigrationProviderContext): Promise<MigrationPlan>;
//#endregion
export { buildClaudePlan };
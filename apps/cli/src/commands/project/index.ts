import type { Argv } from "yargs";

import { projectCreateCommand } from "./create.js";
import { projectListCommand } from "./list.js";

export function projectCommand(yargs: Argv) {
  return yargs.command("project", "Projects management", (yargs) => {
    projectCreateCommand(yargs);
    projectListCommand(yargs);
    return yargs;
  });
}

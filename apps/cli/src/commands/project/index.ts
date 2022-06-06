import type { Argv } from "yargs";

import { projectCreateCommand } from "./create.js";
import { helloCommand } from "./hello.js";
import { projectListCommand } from "./list.js";

export function projectCommand(yargs: Argv) {
  return yargs.command(
    "project",
    "Projects management",
    (yargs) => {
      helloCommand(yargs);
      projectCreateCommand(yargs);
      projectListCommand(yargs);
      return yargs;
    },
    () => {
      yargs.showHelp();
    }
  );
}

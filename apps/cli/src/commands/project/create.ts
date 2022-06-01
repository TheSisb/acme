import type { Argv } from "yargs";

export function projectCreateCommand(yargs: Argv) {
  return yargs.command(
    "create [name]",
    "Create a project",
    (yargs) => {
      return yargs.positional("name", {
        type: "string",
        demandOption: true,
      });
    },
    (args) => {
      console.log(`Project ${args.name} created`);
    }
  );
}

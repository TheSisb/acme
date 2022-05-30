import type { Argv } from "yargs";

export function projectListCommand(yargs: Argv) {
  return yargs.command("list", "List projects", () => {
    console.log(`Projects:`);
    console.log(`- Project 1`);
    console.log(`- Project 2`);
    console.log(`- Project 3`);
  });
}

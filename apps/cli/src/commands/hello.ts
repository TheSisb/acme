import type { Argv } from "yargs";

import { client } from "../config/trpc.js";

export function helloCommand(yargs: Argv) {
  return yargs.command(
    "hello [name]",
    "Hello",
    (yargs) => {
      return yargs.positional("name", {
        type: "string",
      });
    },
    async (args) => {
      const response = await client.query("hello", { name: args.name });

      console.log(response.greeting);
    }
  );
}

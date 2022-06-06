import createYargs from "yargs";
import { hideBin } from "yargs/helpers";

import { helloCommand } from "./commands/hello.js";
import { projectCommand } from "./commands/project/index.js";

const yargs = createYargs(hideBin(process.argv));

yargs.scriptName("acme");

helloCommand(yargs);
projectCommand(yargs);

void yargs.parse();

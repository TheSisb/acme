import createYargs from "yargs";
import { hideBin } from "yargs/helpers";

import { projectCommand } from "./commands/project/index.js";

const yargs = createYargs(hideBin(process.argv));

yargs.scriptName("acme");

projectCommand(yargs);

void yargs.parse();

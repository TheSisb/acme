import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { projectCommand } from "./commands/project/index.js";

const program = yargs(hideBin(process.argv));

program.scriptName("acme");

projectCommand(program);

void program.parse();

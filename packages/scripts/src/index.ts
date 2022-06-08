import { cli } from "cleye";

import { buildCommand } from "./commands/build.js";
import { cleanCommand } from "./commands/clean.js";
import { codegenCommand } from "./commands/codegen.js";
import { devCommand } from "./commands/dev.js";
import { lintCommand } from "./commands/lint.js";
import { startCommand } from "./commands/start.js";
import { testCommand } from "./commands/test.js";

cli({
  name: "acme-scripts",
  commands: [
    buildCommand,
    cleanCommand,
    codegenCommand,
    devCommand,
    lintCommand,
    startCommand,
    testCommand,
  ],
});

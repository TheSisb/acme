import { command } from "cleye";
import { execa } from "execa";

import { tsupBuildOptions } from "./build.js";

export const devCommand = command(
  {
    name: "dev",
    flags: {
      restart: Boolean,
    },
  },
  (argv) => {
    const restartArgs = argv.flags.restart
      ? [
          "--onSuccess",
          // TODO: find a way to make this work, by calling back acme-scripts with a custom command
          "acme-scripts build --types && kill-port 4000 && node dist/index.js",
        ]
      : ["--onSuccess", "acme-scripts build --types"];

    void execa(
      "tsup",
      [
        ...tsupBuildOptions,
        "--watch",
        "--ignore-watch",
        "src/**/*.test.ts",
        ...restartArgs,
      ],
      { stdio: "inherit" }
    );
  }
);

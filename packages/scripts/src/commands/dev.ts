import { command } from "cleye";
import { execa } from "execa";

import { tsupBuildOptions } from "./build.js";

export const devCommand = command(
  {
    name: "dev",
    flags: {
      restart: Number,
    },
  },
  (argv) => {
    const restartArgs = argv.flags.restart
      ? [
          "--onSuccess",
          `acme-scripts build --types && kill-port ${argv.flags.restart} && node dist/index.js`,
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

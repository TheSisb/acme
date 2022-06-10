import { command } from "cleye";
import { execa } from "execa";

import { tscBuildOptions, tsupBuildOptions } from "./build.js";

export const devCommand = command(
  {
    name: "dev",
    flags: {
      restart: Number,
    },
  },
  (argv) => {
    const onSuccessArgs = argv.flags.restart
      ? [
          "--onSuccess",
          `tsc ${tscBuildOptions.join(" ")} && kill-port ${
            argv.flags.restart
          } && node dist/index.js`,
        ]
      : ["--onSuccess", `tsc ${tscBuildOptions.join(" ")}`];

    void execa(
      "tsup",
      [
        ...tsupBuildOptions,
        "--watch",
        "--ignore-watch",
        "src/**/*.test.ts",
        ...onSuccessArgs,
      ],
      { stdio: "inherit" }
    );
  }
);

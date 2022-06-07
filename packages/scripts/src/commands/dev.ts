import { command } from "cleye";
import { execa } from "execa";

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
          "tsc --project tsconfig.build.json --emitDeclarationOnly --declaration --declarationMap && kill-port 4000 && node dist/index.js",
        ]
      : [
          "--onSuccess",
          "tsc --project tsconfig.build.json --emitDeclarationOnly --declaration --declarationMap",
        ];

    execa("tsup", [
      "src/index.ts",
      "--format",
      "esm,cjs",
      "--clean",
      "--watch",
      "--ignore-watch",
      "src/**/*.test.ts",
      ...restartArgs,
    ]).stdout?.pipe(process.stdout);
  }
);

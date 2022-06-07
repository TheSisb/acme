import { command } from "cleye";
import { execa } from "execa";

export const buildCommand = command(
  {
    name: "build",
    flags: {
      types: Boolean,
    },
  },
  (argv) => {
    if (argv.flags.types) {
      void execa(
        "tsc",
        [
          "--project",
          "tsconfig.build.json",
          "--emitDeclarationOnly",
          "--declaration",
          "--declarationMap",
        ],
        { stdio: "inherit" }
      );
    } else {
      void execa(
        "tsup",
        [
          "src/index.ts",
          "--format",
          "esm,cjs",
          "--clean",
          "--onSuccess",
          "acme-scripts build --types",
        ],
        { stdio: "inherit" }
      );
    }
  }
);

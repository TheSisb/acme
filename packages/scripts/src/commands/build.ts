import { command } from "cleye";
import { execa } from "execa";

// if the build script fails for this package, replace it with:
// tsup src/index.ts --format esm,cjs --target node16 --clean --onSuccess 'tsc --project tsconfig.build.json --emitDeclarationOnly --declaration --declarationMap'

export const tsupBuildOptions = [
  "src/index.ts",
  "--format",
  "esm,cjs",
  "--target",
  "node16",
  "--clean",
];

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
        [...tsupBuildOptions, "--onSuccess", "acme-scripts build --types"],
        { stdio: "inherit" }
      );
    }
  }
);

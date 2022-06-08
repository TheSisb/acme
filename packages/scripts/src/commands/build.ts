import { command } from "cleye";
import { execa } from "execa";

// if the build script fails for this package, replace it with:
// tsup src/index.ts --format esm,cjs --target node16 --clean --onSuccess 'tsc --project tsconfig.build.json --emitDeclarationOnly --declaration --declarationMap'

export const tsupBuildOptions = [
  "src/index.ts",
  // TODO: it will work once https://github.com/egoist/tsup/pull/652 is merged and released
  // "--tsconfig",
  // "tsconfig.build.json",
  "--format",
  "esm,cjs",
  "--target",
  "node16",
  "--clean",
];

export const tscBuildOptions = [
  "--project",
  "tsconfig.build.json",
  "--emitDeclarationOnly",
  "--declaration",
  "--declarationMap",
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
      void execa("tsc", tscBuildOptions, { stdio: "inherit" });
    } else {
      void execa(
        "tsup",
        [
          ...tsupBuildOptions,
          "--onSuccess",
          `tsc ${tscBuildOptions.join(" ")}`,
        ],
        { stdio: "inherit" }
      );
    }
  }
);

import { command } from "cleye";
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

export const codegenCommand = command(
  {
    name: "codegen",
    flags: {
      tsconfig: Boolean,
      eslintrc: Boolean,
    },
  },
  (argv) => {
    void (async () => {
      const dirname = path.dirname(url.fileURLToPath(import.meta.url));

      if (argv.flags.tsconfig) {
        const tsconfigPath = path.resolve(dirname, "..", "tsconfig.json");
        const tsconfigBuildPath = path.resolve(
          dirname,
          "..",
          "tsconfig.build.json"
        );
        await Promise.all(
          [tsconfigPath, tsconfigBuildPath].map((p) =>
            fs.copyFile(p, path.resolve(process.cwd(), path.basename(p)))
          )
        );
      }

      if (argv.flags.eslintrc) {
        const eslintrcPath = path.resolve(dirname, "..", ".eslintrc.cjs");
        await fs.copyFile(
          eslintrcPath,
          path.resolve(process.cwd(), path.basename(eslintrcPath))
        );
      }
    })();
  }
);

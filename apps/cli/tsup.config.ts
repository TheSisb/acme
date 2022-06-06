import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  onSuccess: "pnpm build:types",
  // https://github.com/egoist/tsup/discussions/505
  banner: {
    // eslint-disable-next-line no-useless-escape
    js: `import {createRequire as __createRequire} from 'module';var require=createRequire(import\.meta.url);`,
  },
});

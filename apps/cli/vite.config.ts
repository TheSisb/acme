import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    forceRerunTriggers: ["./dist/index.js"],
    watchExclude: ["**/node_modules/**"],
  },
});

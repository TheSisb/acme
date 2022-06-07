import { command } from "cleye";
import { execa } from "execa";

export const lintCommand = command(
  {
    name: "lint",
  },
  () => {
    void execa("concurrently", ["pnpm tsc --noEmit", "pnpm eslint src"], {
      stdio: "inherit",
    });
  }
);

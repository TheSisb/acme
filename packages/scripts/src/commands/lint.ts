import { command } from "cleye";
import { execa } from "execa";

export const lintCommand = command(
  {
    name: "lint",
  },
  () => {
    void execa("tsc --project tsconfig.build.json --noEmit && eslint src", {
      shell: true,
      stdio: "inherit",
    });
  }
);

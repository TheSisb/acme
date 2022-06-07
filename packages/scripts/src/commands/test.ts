import { command } from "cleye";
import { execa } from "execa";

export const testCommand = command(
  {
    name: "test",
  },
  () => {
    void execa("vitest", { stdio: "inherit" });
  }
);

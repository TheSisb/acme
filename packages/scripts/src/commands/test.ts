import { command } from "cleye";
import { execa } from "execa";

export const testCommand = command(
  {
    name: "test",
  },
  (argv) => {
    void execa("vitest", argv._, { stdio: "inherit" });
  }
);

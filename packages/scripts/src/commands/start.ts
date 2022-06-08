import { command } from "cleye";
import { execa } from "execa";

export const startCommand = command(
  {
    name: "start",
  },
  (argv) => {
    void execa("node", ["dist/index.js", ...argv._], { stdio: "inherit" });
  }
);

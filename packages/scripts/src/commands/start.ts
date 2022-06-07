import { command } from "cleye";
import { execa } from "execa";

export const startCommand = command(
  {
    name: "start",
  },
  () => {
    void execa("node", ["dist/index.js"], { stdio: "inherit" });
  }
);

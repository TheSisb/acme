import type { RenderOptions } from "cli-testing-library";
import { render } from "cli-testing-library";
import path from "node:path";
import url from "node:url";

export const runCommand = async (
  args: string[],
  opts?: Partial<RenderOptions>
) => {
  const programPath = path.resolve(
    path.dirname(url.fileURLToPath(import.meta.url)),
    "../dist/index.js"
  );

  const cli = await render("node", [programPath, ...args], opts);

  return cli;
};

export type RunCommand = typeof runCommand;

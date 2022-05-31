import type { Faker } from "@faker-js/faker";

import type { RunCommand } from "./utils.js";

declare module "vitest" {
  export interface TestContext {
    faker: Faker;
    runCommand: RunCommand;
  }
}

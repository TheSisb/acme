import "cli-testing-library/extend-expect";

import { faker } from "@faker-js/faker";
import { beforeEach } from "vitest";

import { runCommand } from "./utils.js";

beforeEach((ctx) => {
  ctx.faker = faker;
  ctx.runCommand = runCommand;
});

import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "./context.js";

export const appRouter = trpc.router<Context>().query("hello", {
  input: z.object({
    name: z.string().optional(),
  }),
  resolve({ input }) {
    return {
      greeting: `hello ${input.name ?? "world"}`,
    };
  },
});

export type AppRouter = typeof appRouter;

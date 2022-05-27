import { doThing } from "@acme/sdk";
import * as trpc from "@trpc/server";
import { z } from "zod";

doThing();

export const appRouter = trpc
  .router()
  .query("getUser", {
    input: z.string(),
    async resolve(req) {
      req.input; // string
      return Promise.resolve({ id: req.input, name: "Bilbo" });
    },
  })
  .mutation("createUser", {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      // use your ORM of choice
      return Promise.resolve({
        data: req.input,
      });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

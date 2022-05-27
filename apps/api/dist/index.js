// src/index.ts
import { App } from "@tinyhttp/app";
import * as trpcExpress from "@trpc/server/adapters/express";

// src/router.ts
import { doThing } from "@acme/sdk";
import * as trpc from "@trpc/server";
import { z } from "zod";
doThing();
var appRouter = trpc.router().query("getUser", {
  input: z.string(),
  async resolve(req) {
    req.input;
    return Promise.resolve({ id: req.input, name: "Bilbo" });
  }
}).mutation("createUser", {
  input: z.object({ name: z.string().min(5) }),
  async resolve(req) {
    return Promise.resolve({
      data: req.input
    });
  }
});

// src/index.ts
var app = new App();
var createContext = (_) => ({});
app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext
}));
app.listen(4e3);

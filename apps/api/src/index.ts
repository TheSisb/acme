import { App } from "@tinyhttp/app";
import type * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./router.js";

const app = new App();

// created for each request
const createContext = (
  _: // req,
  // res,
  trpcExpress.CreateExpressContextOptions
) => ({}); // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);

import { App } from "@tinyhttp/app";
import * as trpcExpress from "@trpc/server/adapters/express";

import { createContext } from "./context.js";
import { appRouter } from "./router.js";

const app = new App();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);

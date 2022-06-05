import { App } from "@tinyhttp/app";

import { createTinyHTTPMiddleware } from "./adapter.js";
import { createContext } from "./context.js";
import { appRouter } from "./router.js";

const app = new App();

app.use(
  "/trpc",
  createTinyHTTPMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);

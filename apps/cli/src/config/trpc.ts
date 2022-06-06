import type { AppRouter } from "@acme/api";
import { createTRPCClient } from "@trpc/client";
import fetch from "node-fetch";

export const client = createTRPCClient<AppRouter>({
  url: "http://localhost:4000/trpc",
  // @ts-expect-error the type of node-fetch is not compatible: https://github.com/node-fetch/node-fetch/issues/1261
  fetch,
});

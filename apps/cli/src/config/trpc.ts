import type { AppRouter } from "@acme/api";
import { createTRPCClient } from "@trpc/client";
import { fetch } from "undici";

export const client = createTRPCClient<AppRouter>({
  url: "http://localhost:4000/trpc",
  fetch,
});

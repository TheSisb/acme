import type * as trpc from "@trpc/server";

import type { CreateTinyHTTPContextOptions } from "./adapter.js";

export const createContext = (_: CreateTinyHTTPContextOptions) => ({});

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

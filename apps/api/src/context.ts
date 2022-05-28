import type * as trpc from "@trpc/server";
import type * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = (
  _: trpcExpress.CreateExpressContextOptions
) => ({});

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

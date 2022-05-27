import type * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
declare const createContext: (_: trpcExpress.CreateExpressContextOptions) => {};
export declare type Context = trpc.inferAsyncReturnType<typeof createContext>;
export {};
//# sourceMappingURL=index.d.ts.map
import type * as tinyhttp from "@tinyhttp/app";
import type { AnyRouter } from "@trpc/server";
import type {
  NodeHTTPCreateContextFnOptions,
  NodeHTTPHandlerOptions,
} from "@trpc/server/adapters/node-http";
import { nodeHTTPRequestHandler } from "@trpc/server/adapters/node-http";

type Handler = (
  req: tinyhttp.Request,
  res: tinyhttp.Response,
  next?: tinyhttp.NextFunction
) => Promise<void>;

export type CreateTinyHTTPContextOptions = NodeHTTPCreateContextFnOptions<
  tinyhttp.Request,
  tinyhttp.Response
>;

export function createTinyHTTPMiddleware<TRouter extends AnyRouter>(
  opts: NodeHTTPHandlerOptions<TRouter, tinyhttp.Request, tinyhttp.Response>
): Handler {
  return async (req, res) => {
    const endpoint = req.path.slice(1);

    await nodeHTTPRequestHandler({
      ...opts,
      req,
      res,
      path: endpoint,
    });
  };
}

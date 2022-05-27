var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
module.exports = __toCommonJS(src_exports);
var import_app = require("@tinyhttp/app");
var trpcExpress = __toESM(require("@trpc/server/adapters/express"), 1);

// src/router.ts
var import_sdk = require("@acme/sdk");
var trpc = __toESM(require("@trpc/server"), 1);
var import_zod = require("zod");
(0, import_sdk.doThing)();
var appRouter = trpc.router().query("getUser", {
  input: import_zod.z.string(),
  async resolve(req) {
    req.input;
    return Promise.resolve({ id: req.input, name: "Bilbo" });
  }
}).mutation("createUser", {
  input: import_zod.z.object({ name: import_zod.z.string().min(5) }),
  async resolve(req) {
    return Promise.resolve({
      data: req.input
    });
  }
});

// src/index.ts
var app = new import_app.App();
var createContext = (_) => ({});
app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext
}));
app.listen(4e3);

# Issues to fix:

### TypeScript is losing it
src/router.ts(7,14): error TS2742: The inferred type of 'appRouter' cannot be named without a reference to '../../node_modules/@trpc/server/dist/internals/procedure.js'. This is likely not portable. A type annotation is necessary.

https://github.com/microsoft/TypeScript/issues/42873
https://github.com/microsoft/TypeScript/issues/29808#issuecomment-540292885
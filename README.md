# Issues to fix:

## API

### TS2742

`src/router.ts(7,14): error TS2742: The inferred type of 'appRouter' cannot be named without a reference to '../../node_modules/@trpc/server/dist/internals/procedure.js'. This is likely not portable. A type annotation is necessary.`

Workaround found: https://github.com/microsoft/TypeScript/issues/42873#issuecomment-1140506416

### tinyhttp's `App` being imported as `any`

https://github.com/tinyhttp/tinyhttp/issues/358

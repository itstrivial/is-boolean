// Aim:
// 1. Throw exception at import.
// 2. Annoy via editor intellisense.
// 3. Throw when using the module.

const ERR = new Error("Use `typeof x == \"boolean\";` instead.");

throw ERR;

// deno-lint-ignore no-explicit-any no-unreachable
type Any = any;

/**
* You don't need this module.
* Use `typeof x == "boolean";` instead.
**/
export default function (x: Any): boolean {
  throw ERR;
}

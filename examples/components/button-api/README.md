# A button is never just a button: component API

An intentionally small React + TypeScript example showing how much accessible behavior comes for free from a native HTML `<button>`.

## What this demonstrates

- Native `button` semantics, focusability and keyboard activation—without recreating them in JavaScript.
- `type="button"` by default, to avoid accidental form submission; explicit `type="submit"` when needed.
- Standard HTML attributes and typed event handlers instead of a custom component API for everything.
- A disabled/loading state that blocks duplicate activation and provides visible progress text.

## Why this is an example, not a production library

A real design-system button also needs visual variants, focus treatments, styling, icon support, and careful decisions about asynchronous operations. This example deliberately does not duplicate [Lutra UI](https://myduong.com/lutra-ui/).

The loading text updates when React renders the state; it is **not guaranteed to be announced** by every screen reader when the button becomes disabled. A production flow should also provide appropriate status feedback near the operation (for example, a dedicated `role="status"` element) and manage focus if content is replaced.

## Run the tests

From the repository root, with Node 22.12+ and pnpm installed:

```sh
pnpm install
pnpm typecheck
pnpm test
```

Tests cover default/submit types, native keyboard behavior, disabled/loading behavior, and forwarding of native attributes.

## Related writing

[A Button Is Never Just a Button](https://myduong.com/writing/a-button-is-never-just-a-button)

# One button, four approaches

A small collection of **copyable snippets** illustrating how React, Angular, Vue, and a native Web Component wrap an HTML button.

**Purpose:** Compare framework APIs and preserve native semantics. These are teaching examples, **not** ready-made design-system components, installable packages, or standalone projects.

| Framework | Snippet |
| --- | --- |
| React | [Button.tsx](react/Button.tsx) |
| Angular | [button.component.ts](angular/button.component.ts) |
| Vue | [Button.vue](vue/Button.vue) |
| Web Component | [simple-button.js](web-component/simple-button.js) |

Each example renders a button with text, supports disabling it, and allows the caller to handle an activation. React, Angular, and Vue use a native `<button>` in their templates. The Web Component uses a button inside its shadow root.

## Important differences

- **React:** JSX and typed native button props; callers pass `onClick`.
- **Angular:** A standalone component with signal-based input and an output event.
- **Vue:** A single-file component with props and an emitted `click` event.
- **Web Component:** Browser-native custom element with a `disabled` attribute and a composed `button-activate` event.

All snippets use native keyboard behavior by relying on a real `<button>`. The examples intentionally omit themes, styling APIs, loading states, and comprehensive tests.

**Form behavior is not equivalent across all four snippets:** The React, Angular, and Vue wrappers have an ordinary inner button that can be extended for submit/reset behavior. The autonomous Web Component's shadow-root button does not automatically participate in the parent form. Don't use that snippet as a drop-in submit button.

For production usage, consider focus styling, disabled-state announcements, validation, forms, design tokens, event API conventions, and accessibility testing in the actual application.

## Related writing

[A Button Is Never Just a Button](https://myduong.com/writing/a-button-is-never-just-a-button)

Copy individual snippets from their source files. Framework dependencies and project setup are intentionally omitted.

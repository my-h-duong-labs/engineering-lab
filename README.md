# Engineering Lab

A curated collection of frontend engineering examples, accessibility patterns, and design-system experiments by [My Duong](https://myduong.com).

This repository is a place to explore **how and why** an implementation works: small, focused examples with clear trade-offs, accessible behavior, and tests where they add value.

## Examples

| Example | Focus | Related article |
| --- | --- | --- |
| [Button fundamentals and four frameworks](examples/components/button/) | Native HTML/CSS/JS fundamentals and React, Angular, Vue, Web Component snippets | [A Button Is Never Just a Button](https://myduong.com/writing/a-button-is-never-just-a-button) |
| [Focus and keyboard accessibility](examples/accessibility/focus/) | Tab order, programmatic focus, dialog focus restoration, obscured focus, and semantic navigation as standalone HTML pages | [Focus on What’s Important](https://myduong.com/writing/focus-on-whats-important) |
| [Accessible heading structure](examples/accessibility/headings/) | Heading hierarchy, headings versus styling, named regions and dialogs as standalone HTML pages, plus a React card comparing a heading-level prop with composition | [Headings Lead the Way](https://myduong.com/writing/headings-lead-the-way) |

Each example is a short, readable source file. No installation or build is required to browse or copy snippets. Future examples can follow [the example template](docs/example-template.md).

## What belongs here

- **Accessibility:** Semantic HTML, keyboard interactions, focus management, forms, and testing.
- **Frontend patterns:** React and TypeScript APIs, component composition, and maintainability.
- **Design systems:** Tokens, theming, component contracts, and the bridge between design and code.
- **Article companions:** Runnable or inspectable examples that complement posts on [myduong.com/writing](https://myduong.com/writing).

Examples will be added incrementally. The goal is useful, understandable code—not a collection of boilerplate demos.

## Relationship to other projects

This lab is **not** a second component library or a source of production code for other repositories. Production components remain in their respective projects; examples here illustrate techniques, alternatives, and experiments without duplicating maintained implementations.

- [Portfolio](https://myduong.com/portfolio) — Selected engineering work and case studies.
- [Writing](https://myduong.com/writing) — Articles that may reference examples from this lab.
- [Lutra UI Storybook](https://myduong.com/lutra-ui/) — The published component library and its real implementations.

## Principles

1. **One example, one clear problem.** Explain the context and trade-offs.
2. **Accessible by default.** Favor platform semantics and verify interactive behavior.
3. **Test what matters.** Include meaningful tests rather than coverage for its own sake.
4. **Keep examples independent.** No client or proprietary code, and no copies of production components.
5. **Stay lightweight.** Add tooling only when an example needs it.

---

Maintained by [My Duong](https://github.com/my-h-duong). Explore more at [myduong.com](https://myduong.com).

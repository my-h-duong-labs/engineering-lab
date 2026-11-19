# Engineering Lab

A curated collection of frontend engineering examples, accessibility patterns, and design-system experiments by [My Duong](https://myduong.com).

This repository is a place to explore **how and why** an implementation works: small, focused examples with clear trade-offs, accessible behavior, and an honest account of how each was checked.

**These are educational examples, not production-ready packages or components.** Read them, copy what is useful, and adapt it.

## Examples

| Example | Focus | Related article |
| --- | --- | --- |
| [Button fundamentals and four frameworks](examples/components/button/) | Native HTML/CSS/JS fundamentals and React, Angular, Vue, Web Component snippets | [A Button Is Never Just a Button](https://myduong.com/writing/a-button-is-never-just-a-button) |
| [Focus and keyboard accessibility](examples/accessibility/focus/) | Tab order, programmatic focus, dialog focus restoration, obscured focus, and semantic navigation as standalone HTML pages | [Focus on What’s Important](https://myduong.com/writing/focus-on-whats-important) |
| [Accessible heading structure](examples/accessibility/headings/) | Heading hierarchy, headings versus styling, named regions and dialogs as standalone HTML pages, plus a React card comparing a heading-level prop with composition | [Headings Lead the Way](https://myduong.com/writing/headings-lead-the-way) |

Each example is a short, readable source file. No installation or build is required to browse or copy snippets. Future examples can follow [the example template](docs/example-template.md).

## Testing and verification

This repository has no CI workflow, test suite, or coverage reporting, so it shows no status or coverage badges. Where an example was checked, its own README says how: the focus and heading examples list the browsers and tools used and what was not tested. The button snippets do not document their verification. Automated checks are not a guarantee, and nothing here is a statement of production readiness. See the [badge conventions](docs/badge-conventions.md) for what a badge in this repository would have to be backed by.

## Accessibility

The examples favor semantic HTML, keyboard operation, and visible focus, and they say where a pattern is deliberately incomplete or broken for demonstration. Automated checks such as axe-core find only part of the problems on a page, and a pass is not a statement of WCAG conformance. No example claims screen reader testing; the focus and heading examples say plainly that it was not done.

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
3. **Be honest about verification.** Say what was checked, how, and what was not. Add tests where they earn their place, not to chase coverage.
4. **Keep examples independent.** No client or proprietary code, and no copies of production components.
5. **Stay lightweight.** Add tooling only when an example needs it.

## Documentation

- [Example template](docs/example-template.md) — the shape of a snippet's explanation.
- [README template](docs/readme-template.md) — a short starting point for project READMEs.
- [Badge conventions](docs/badge-conventions.md) — when a badge is backed by evidence and when it is not.

---

Maintained by [My Duong](https://github.com/my-h-duong). Explore more at [myduong.com](https://myduong.com).

# Accessible heading structure

Four small, copyable examples supporting [Headings Lead the Way](https://myduong.com/writing/headings-lead-the-way).

These are **educational examples**, not production components, packages, or applications. The three HTML pages are standalone; open them in a browser, no install or build needed. The React file is a snippet to read and copy, not a project.

The lesson they share: **a heading should make sense in the document's structure, regardless of how it looks.** Choose the level from how content relates to other content, then use CSS for appearance.

| Article section | Example | What it illustrates |
| --- | --- | --- |
| The structure behind the screen, What a screen reader gets, Avoid skipping levels when opening sections | [heading-hierarchy.html](heading-hierarchy.html) | The same settings page with a tangled and a corrected heading outline |
| Do not choose headings for their size, Do not fake headings with styled text, Do not add headings everywhere | [headings-vs-styling.html](headings-vs-styling.html) | Look and meaning as independent choices |
| A modal still needs structure, Regions should have useful names | [named-regions.html](named-regions.html) | A visible heading naming a region and a native dialog |
| Components should not assume they own the page, Panels and drawers have the same problem, Heading semantics in a design system | [react/HeadingCard.tsx](react/HeadingCard.tsx) | A Card that leaves the heading level to the page |

Related examples: [focus restoration](../focus/focus-restoration.html) covers the full native dialog interaction that `named-regions.html` deliberately does not repeat, and [semantic navigation](../focus/semantic-navigation.html) shows headings, lists, and a landmark organizing links.

## heading-hierarchy.html

- **Demonstrates:** one small settings page twice. **Before** is labeled *Intentionally problematic: do not copy*: its levels are inconsistent (Profile is a level 3 while Security is a level 2, Password and Email skip a level, Delete account is another level 1). **After** uses one `h1`, `h2` sections, and `h3` subsections. Both look identical because styling comes from classes, not tags.
- **Try:** Compare the two heading lists under the pages. Inspect either page in your browser's DevTools or accessibility tree.
- **Expect:** The two pages render pixel-for-pixel alike and have different outlines. The lists are read from each version's own DOM, scoped to its container, so this page's own headings are not counted.
- **Caveats:** The lists are a **learning aid, not a screen reader**. They show element levels only; real assistive technology presents headings in its own ways. A jump of more than one level is something to look at and an advisory to avoid where possible, not an automatic WCAG failure. A page does not need exactly one `h1` to be valid HTML; the After version uses one for a clear top-level subject. Axe-core's best-practice `heading-order` rule (4.12.1) flags exactly the three jumps in Before and nothing in After, and no WCAG-tagged rule is violated by either. Because both versions share one file, this page's own outline includes both.
- **Do not copy:** The Before markup, the `.badge` labels, and the list-building script.

## headings-vs-styling.html

- **Demonstrates:** four cases. (1) A large bold `<div>` that is not a heading. (2) A real `h2` with the same look. (3) An `h2` styled smaller than the browser's default `h2` (usually `1.5em`). (4) A prominent value, `$4,291`, in a `<dl>` that is not a heading.
- **Try:** Compare cases 1 and 2 visually, then read the table, which is built from the DOM.
- **Expect:** Cases 1 and 2 look alike and differ in structure; case 3 looks modest and is still a level 2; case 4 is the biggest text and is not a heading.
- **Caveats:** The table reads tag names only; an element with `role="heading"` and `aria-level` would also be a heading and is not detected. The explanatory labels are paragraphs, not headings, so they do not compete with the demo's real headings in this page's outline.
- **Do not copy:** The readout script. Do not choose an `h4` because it looks right; choose the level from the structure and style it.

## named-regions.html

- **Demonstrates:** a `<section aria-labelledby>` named by its visible heading ("Recent activity"), a native `<dialog>` named by its heading ("Delete project?"), and two unnamed `<section>`s and a set of plain cards that deliberately are not landmarks.
- **Try:** Read the table of `aria-labelledby` references. Press Enter on "Delete project…", then Tab, Escape, and the buttons. Look at the page's landmarks in your browser's accessibility tools.
- **Expect:** One region landmark. A `<section>` is only exposed as a region when it has an accessible name, so the other sections are not. The dialog is named by its heading; focus starts on Cancel; Escape closes it and focus returns to the button when opened by keyboard.
- **Caveats:** Name a region when it is a distinct part of the page someone may want to jump to, not for every container; too many landmarks and headings make navigation noisier. The dialog heading is an `h2` here because the dialog sits beside the page's other sections; its level depends on where it sits in a real document and is not automatically `h1`. For the full focus behavior of a native dialog, including how browsers differ, see [focus restoration](../focus/focus-restoration.html).
- **Do not copy:** The reference table, which is a learning aid and not a full accessible-name computation, and the page's demo copy.

## react/HeadingCard.tsx

- **Demonstrates:** two ways for a reusable `Card` to take part in a page's hierarchy. `Card` takes a required `headingLevel` (`1 | 2 | 3 | 4 | 5 | 6`) and a `title`. `CardShell` takes whatever the page composes inside it, such as `<h2>Recent activity</h2>`. `ExamplePage` shows the page choosing levels.
- **Try:** Read the file top to bottom; copy either component.
- **Expect:** `<Card title="Today" headingLevel={3} />` renders an `<h3>`; `CardShell` renders exactly the heading it is given. Neither defaults to `h1`, and neither derives a level from visual size.
- **Trade-offs:** An explicit prop is type-checked and easy to test but narrows the title to plain text. Composition allows a link or badge in the heading and keeps the component simple, but nothing enforces that a heading exists or fits, so that needs review, linting, or a test of the rendered output. Either way the consuming page owns the document hierarchy.
- **Caveats:** The level type is a compile-time guard only. Untyped callers or a type cast can still produce an invalid element, so add a runtime check if you need one. The card renders a plain `div` on purpose; making each card a named `<section>` would add a landmark per card. Empty titles render no heading. `headingoffset` is experimental and is not used or relied on here.
- **Do not copy:** Both components together (choose one), the `card` class name, and `ExamplePage`.

## Browser and tooling notes

- The HTML pages were checked with Playwright's Chromium, Firefox, and WebKit, and with axe-core. The React snippet was type-checked under strict TypeScript and rendered with `react-dom/server`.
- None of this involved a screen reader. Heading navigation and announcements in real assistive technology are not covered.

## References

- WAI: [Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- WCAG 2.2: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships), [Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels), [Section Headings](https://www.w3.org/WAI/WCAG22/Understanding/section-headings), techniques [G141](https://www.w3.org/WAI/WCAG22/Techniques/general/G141) and [H42](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- WAI-ARIA Authoring Practices: [Modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [Landmark regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- MDN: [Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section), [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [`headingoffset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) (experimental)

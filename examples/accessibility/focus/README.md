# Focus and keyboard accessibility

Five small, copyable examples supporting [Focus on What’s Important](https://myduong.com/writing/focus-on-whats-important).

These are **educational examples**, not production components, packages, or applications. Each is one standalone HTML page with a little embedded CSS and JavaScript. Open a file in a browser; no install or build is needed.

Unlike the [button fundamentals](../../components/button/fundamentals/) snippets, which are fragments, these are complete pages because the behavior depends on a document: scrolling, a modal dialog, landmarks. Each page repeats the visible-focus rule from [`focus-visible.css`](../../components/button/fundamentals/focus-visible.css) so the file works on its own.

| Article section | Example | What it illustrates |
| --- | --- | --- |
| Focus Is a State (`tabindex="0"`, positive `tabindex`) | [natural-tab-order.html](natural-tab-order.html) | Document order, and the one place `tabindex="0"` earns its keep |
| Focus Is a State (`tabindex="-1"`), Focus Is Context | [programmatic-focus.html](programmatic-focus.html) | Moving focus to an error summary, and not moving it when nothing needs attention |
| Focus Is a State (dialog), Focus Is Orientation | [focus-restoration.html](focus-restoration.html) | Native `<dialog>`: focus in, Escape out, focus back |
| Focus can exist and still disappear | [obscured-focus.html](obscured-focus.html) | A sticky header hiding focus, and `scroll-padding` as the fix |
| Links need context, Structure carries context too | [semantic-navigation.html](semantic-navigation.html) | Vague links versus descriptive links in a labeled landmark |

## natural-tab-order.html

- **Demonstrates:** links, a select, a text field, and a button reached in document order with no `tabindex`. A scrollable region that holds nothing focusable uses `tabindex="0"` so it can be scrolled by keyboard, with a role and a name.
- **Try:** Tab and Shift+Tab through the page. Once the log region has focus, use the arrow keys.
- **Expect:** The "Focused:" line follows you in the same order as the HTML. The region shows an outline and scrolls.
- **Leaves out:** Custom widgets that need `tabindex` or roving focus.
- **Do not copy:** The "Focused:" readout is a demo aid. The positive-`tabindex` and focusable-`<div>` anti-patterns appear only in an HTML comment, as things to recognize rather than use.

## programmatic-focus.html

- **Demonstrates:** a failed submit shows an error summary, and focus moves to it on purpose. The summary is `tabindex="-1"`: a destination, not a Tab stop. Each message links to its field, and the link moves focus into the field, since a `#fragment` alone scrolls but does not focus. Fields get `aria-invalid` and `aria-describedby` pointing at an inline "Error: …" message.
- **Try:** Press Enter in the empty Name field. Press Tab to reach a message, then Enter. Fill both fields correctly and submit again.
- **Expect:** Focus lands on the summary, then the field. On success the result is announced in a status message and **focus stays on the button**, because nothing else needs attention.
- **Leaves out:** Server-side errors, asynchronous validation, and validating while the user types (which should not move focus).
- **Do not copy:** The validation rules and the demo-only `preventDefault()`. `novalidate` is used only so the demo's own messages appear; keep real validation on the server.

## focus-restoration.html

- **Demonstrates:** a native `<dialog>` opened with `showModal()`. There is no script for focus, Tab containment, or Escape; the browser provides them. `autofocus` on the safer button picks the starting point.
- **Try:** Press Enter on "Open dialog". Try Tab, Shift+Tab, Escape, then each button.
- **Expect:** Focus enters the dialog and the page behind it cannot be reached. Opened with the keyboard, closing returns focus to "Open dialog"; opened with a mouse, that depends on the browser (see below). The status line reports how it closed and whether focus returned.
- **Leaves out:** Closing on backdrop click, scroll locking, nested dialogs, and what to focus when the trigger no longer exists after the action.
- **Do not copy:** The status readout. Do copy the `returnValue` reset: it is not cleared on close, so without it Escape reports the previous button.
- **Browser differences:** In Chromium, Tab from the last button moves to browser UI, then back into the dialog. In automated Firefox, focus stayed on the last button. In all three engines tested, the page behind the dialog was never reached. In WebKit, clicking a button does not focus it, so a dialog opened with the **mouse** had no focused trigger to return to. Opened by keyboard, focus returns everywhere tested.

## obscured-focus.html

- **Demonstrates:** an opaque sticky header covering the item that has focus. The outline is drawn on every step; it is simply underneath the header. The page starts **broken on purpose**. Ticking the box adds only `scroll-padding-block-start`, computed from the same variable as the header height plus room for the outline.
- **Try:** Tab about ten times, then Shift+Tab repeatedly, with the box unchecked. Tick it and repeat.
- **Expect:** Unchecked, items slide under the header: expected failure. Checked, each item stops below it.
- **WCAG 2.4.11 (Focus Not Obscured, Minimum, AA)** is concerned with a focused component being *entirely* hidden by author-created content, which is what the broken version shows when focus moves behind the header. Whether a real page fails depends on the page and the criterion's qualifications, for example content the user can move or dismiss. A component only *partly* hidden is not a 2.4.11 problem, but is what 2.4.12 (Enhanced, AAA) rules out. The fixed version keeps each item fully visible on the path above.
- **Leaves out:** Fixed footers and cookie banners (these need `scroll-padding-block-end`), headers whose height changes at runtime (measure and update the variable), and `scroll-margin` on specific targets.
- **Do not copy:** The mode toggle, and the fixed header heights, which are demo values. Each "Topic" link points at its own list item so the fragment has a valid destination; that is for demonstration only and is not meaningful navigation. Activating one scrolls its item into view, which the header and `scroll-padding` affect the same way they affect focus.

## semantic-navigation.html

- **Demonstrates:** the same destinations twice. The first has "Learn more", "Click here", and "Read more" inside generic markup, which reads fine beside the sentence but not as a list of links. The second names each link, groups them under headings in lists, and wraps them in `<nav aria-label="Footer">`. A generated "Link names alone" list under each block approximates a links list.
- **Try:** Tab through both blocks, then compare the two link lists.
- **Expect:** Both are fully keyboard operable and show focus. Only the second tells you what each link is and which group you are in.
- **Leaves out:** A skip link, the other landmarks, and `aria-current`.
- **Do not copy:** The "Demo destinations" list, which stands in for separate pages, and the link-names list, which is an approximation, not screen reader output. On a real page, give each `<nav>` its own distinct label.

## Browser notes

- Tab behavior differs by browser. Playwright's WebKit on macOS skipped links and buttons and stopped only on form controls and `tabindex="0"`. That matches Safari's default; Safari has a setting, "Press Tab to highlight each item on a webpage", and Option+Tab does the same. The examples are correct either way.
- Behavior here was observed in Playwright's Chromium 151, Firefox 153, and WebKit 26.5 on macOS. It was not tested with screen readers, real Safari, or touch devices.

## References

- WCAG 2.2: [Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order), [Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible), [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum), [Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced), [On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus), [Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification), [Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- WAI-ARIA Authoring Practices: [Modal dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [Landmark regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)
- MDN: [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), [`scroll-padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)

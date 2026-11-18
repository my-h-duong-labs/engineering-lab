# Button fundamentals

Small, copyable browser-platform snippets supporting [A Button Is Never Just a Button](https://myduong.com/writing/a-button-is-never-just-a-button).

These are **educational source examples**, not full applications or production-ready controls. HTML files contain their own short JavaScript handlers where a little interaction makes the concept clearer; paste each file into an HTML document to explore it. For the CSS example, copy the rules into a stylesheet.

| Article section | Example | What it illustrates |
| --- | --- | --- |
| Button or link? | [button-or-link.html](button-or-link.html) | Navigate with an anchor; act with a button |
| Native behavior is doing more than people think | [native-button.html](native-button.html) | Native keyboard activation, name, and status feedback |
| Icon-only buttons need names | [icon-only-button.html](icon-only-button.html) | Explicit accessible name and decorative icon |
| Focus is part of the button's behavior | [focus-visible.css](focus-visible.css) | Visible keyboard focus styling |
| Forms add another layer | [form-button-types.html](form-button-types.html) | `type="button"` versus `type="submit"` |
| Toggle buttons are different from regular buttons | [toggle-button.html](toggle-button.html) | Stable label and `aria-pressed` state |

## Why no example for every section?

The article already includes short code excerpts. These files are for concepts where a reader benefits from copying a complete, isolated piece of markup. Loading, disabled-state explanations, validation, and focus transitions after destructive actions depend on the surrounding product flow; those deserve their own focused examples later rather than misleading one-line recipes.

## Important boundaries

- The dialog example uses the native `<dialog>` element and returns focus to the trigger when it closes.
- `role="status"` reports simple example feedback; production messaging must match real application outcomes.
- The toggle's `aria-pressed` state is illustrative; connect it to actual feature state in an application.
- Visual styles, responsive layouts, and comprehensive assistive-technology testing are outside the scope of these snippets.

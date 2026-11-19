# README template

A short starting point for project READMEs. Copy the block below, fill it in, and delete what does not apply. A section you cannot back with something real is better omitted than filled with filler.

**Rules**

- Placeholders are written `‹like this›`. Before publishing, search for `‹` and make sure none remain.
- Badges are optional. Add one only when [the badge conventions](badge-conventions.md) say it is backed by evidence. An empty badge row is fine.
- Describe what was checked and what was not. Do not imply a guarantee that no tool or test provides.

## Template

````markdown
# ‹Project name›

‹One or two sentences: what this is and what it is for.›

<!-- Optional badges, one line, only those backed by evidence. See docs/badge-conventions.md. -->

## Purpose

‹Who it is for, and the problem it addresses. If it is educational, an experiment, or not production-ready, say so here.›

## Examples

‹Or "Features". A short list or table with a link to each. For a catalog, one row per item.›

## Usage

‹How to use it: install or open, a minimal example, and where to find more. For copyable snippets, say what to change before using one in a real project.›

## Testing and verification

‹What is run, where, and how: for example the commands, or a link to the CI workflow. Say what is not covered. Report coverage only if a tool produces the number, and link to the report. If nothing is automated, say that and how the work was checked instead.›

## Accessibility

‹The approach, such as semantic HTML first, keyboard operation, and visible focus. Then the limits: which automated checks run and what they cannot detect, and what has not been tested, such as screen readers. Do not describe automated results as conformance with WCAG or any other standard.›

## Related documentation

‹Links to design docs, articles, templates, or sibling projects.›

## License

‹License name and a link to the LICENSE file. Omit this section if no license has been chosen yet.›
````

## Notes for adapting

- **Libraries and apps:** add install and API sections to Usage, and keep everything else. Put contribution and release process in separate documents rather than growing the README.
- **Educational repositories:** the Purpose section carries the "not production code" statement; do not rely on a badge for it.
- **Keep it short.** If a section grows past a screen, move the detail to its own document and link to it.

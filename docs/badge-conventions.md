# Badge conventions

A badge is a claim. Show one only when it is backed by evidence a reader can follow, and when it says exactly what the evidence supports. A README with no badges is better than one with a badge that overstates.

Badges are ordinary Markdown images from [Shields.io](https://shields.io), linked to the evidence behind them:

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/‹owner›/‹repo›/‹workflow›.yml?branch=main&label=CI)](https://github.com/‹owner›/‹repo›/actions/workflows/‹workflow›.yml)
```

## Before adding any badge

1. **A live source backs it.** A workflow, a generated report, a package registry, or repository metadata. Never a value typed by hand.
2. **Readers can reach the source.** Shields cannot read private repositories, so their status badges render an error (checked: a private repo's workflow badge shows "repo or workflow not found"). Add repository-backed badges only when the repository is public.
3. **The label says what is measured**, and the badge links to where it is measured.
4. **It cannot go stale.** If the number or status is not recomputed automatically, do not badge it. Write it in prose with a date instead.

Keep to a single line of at most four badges, give each meaningful alt text (the label), and never use a badge as the only place a fact appears. If it matters, say it in the text too.

## Badge types

| Badge | What it asserts | Evidence required | Do not |
| --- | --- | --- | --- |
| **CI status** | The latest run of one workflow on the default branch passed | A workflow file that runs on the default branch, in a public repository | Imply the workflow tests more than it does. The badge covers the whole workflow, not one kind of test |
| **Coverage** | A percentage of code measured by tests, as reported by a tool | A real coverage report produced by CI and published somewhere the badge can read | Hand-type a number, use a static badge, or use it as a proxy for quality or accessibility |
| **Accessibility checks** | An automated accessibility workflow passed | A dedicated workflow that runs an automated checker such as axe-core, linked from the badge | Use the words "WCAG", "compliant", "accessible", or a conformance level |
| **Package version** | The latest version published to a registry | A package actually published to a public registry | Use it for a repository that publishes nothing, or read it as the version a consumer has pinned |
| **License** | The license GitHub detects for the repository | A LICENSE file GitHub recognises, in a public repository | Show it when no license exists: it renders "not specified" |
| **Informational** | A fact that is not measured and a reader should know before using the project | The fact is true and documented in the README | Use it for quality ("tested", "accessible", "production ready"), or colour it green or red as if it passed or failed |

### CI status

```markdown
[![CI](https://img.shields.io/github/actions/workflow/status/‹owner›/‹repo›/‹workflow›.yml?branch=main&label=CI)](https://github.com/‹owner›/‹repo›/actions/workflows/‹workflow›.yml)
```

`‹workflow›.yml` is the file name under `.github/workflows/`. A wrong name renders "repo or workflow not found", so check the badge after adding it. If the workflow has several jobs, the badge reflects all of them together.

### Coverage

Use a coverage service that Shields supports, or publish a small JSON file from CI and read it with a Shields endpoint badge. Either way the percentage must come from the report, and the link should open the report.

```markdown
[![Coverage](https://img.shields.io/codecov/c/github/‹owner›/‹repo›)](https://app.codecov.io/gh/‹owner›/‹repo›)
```

Without an uploaded report this badge renders "coverage: unknown", so adding the workflow step comes first. The endpoint-badge alternative is not exercised in this repository and should be tried before it is relied on. State which kind of coverage the number is (lines, branches) next to it in the README.

### Accessibility checks

Automated tools find only part of the accessibility problems on a page, and a pass says nothing about what they cannot detect. If a project runs an automated checker in CI, give it its own workflow so the badge can describe that run alone, and label it for the tool:

```markdown
[![axe checks](https://img.shields.io/github/actions/workflow/status/‹owner›/‹repo›/‹a11y-workflow›.yml?branch=main&label=axe%20checks)](https://github.com/‹owner›/‹repo›/actions/workflows/‹a11y-workflow›.yml)
```

Put a sentence beside it in the README, in the Accessibility section, that says what is checked and what is not (for example, screen readers and manual keyboard review). If the checker runs inside a larger workflow, either split it out or omit this badge; a combined workflow's badge cannot make this claim.

### Package version

```markdown
[![npm](https://img.shields.io/npm/v/‹package›)](https://www.npmjs.com/package/‹package›)
```

This is the latest published version, which may differ from the repository's main branch and from what an application has pinned.

### License

```markdown
[![License](https://img.shields.io/github/license/‹owner›/‹repo›)](https://github.com/‹owner›/‹repo›/blob/main/LICENSE)
```

Add the LICENSE file first and check that GitHub detects it. For a published package, `https://img.shields.io/npm/l/‹package›` reports the license declared on the registry.

### Informational

```markdown
[![Status](https://img.shields.io/badge/status-educational%20examples-blue)](#purpose)
```

Use neutral colours (blue, lightgrey). Do not add an informational badge that repeats the sentence directly beside it.

## Status in this repository

Checked on 2026-11-18. Engineering Lab has no workflows, no workflow runs, no package or test configuration, no coverage reporting, and no automated accessibility checks. It has an MIT LICENSE file, but no badge is displayed yet (see the License row). Update this table when any of that changes.

| Badge | Status | What it would take |
| --- | --- | --- |
| CI status | Not supported | A workflow under `.github/workflows/` that does something worth reporting, for example checking links, then a badge pointing at it |
| Coverage | Not applicable | The examples are standalone snippets with no test suite, and a coverage tool needs code under test. Do not add one just to produce a number |
| Accessibility checks | Not supported | A dedicated workflow that loads the HTML examples in a browser and runs axe-core. Today those checks were run by scripts kept outside this repository when the focus and heading examples were written, and are summarized in their READMEs; the button snippets record none |
| Package version | Not applicable | Nothing here is published as a package |
| License | Supported once merged | A LICENSE file now exists. GitHub detects a repository's license on the default branch, so the badge renders "license: MIT" only after the file is on `main`. Check that it does, then add it |
| Informational | Not needed | The README already states that the examples are educational and not production code |

## Adapting this to other repositories

Apply the same four tests. Two things differ between projects. A private repository cannot use repository-backed badges until it is public, though a registry badge for a published package still works. And a project that runs several kinds of checks in one workflow should not badge that workflow as proof of any one of them.

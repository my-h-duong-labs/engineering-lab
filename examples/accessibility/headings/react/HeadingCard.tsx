import type { ReactNode } from 'react';

/*
 * Two ways for a reusable Card to take part in a page's heading hierarchy. Both leave the choice of level
 * with the page that uses the card, because only the page knows where the card sits.
 *
 * Neither derives the level from how big the title looks, and neither picks a default. A real component
 * would normally offer one of these, not both.
 */

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/*
 * Approach 1: the consumer chooses the level.
 *
 *   <Card title="Recent activity" headingLevel={2} />
 *
 * Trade-offs: the level is a required, type-checked prop, so it cannot be forgotten and tests can assert on
 * it. The cost is a narrower API: the title is plain text, and anything richer (a link, an icon, a badge in
 * the heading) needs more props.
 */
type CardProps = {
  children?: ReactNode;
  headingLevel: HeadingLevel;
  title: string;
};

export function Card({ children, headingLevel, title }: CardProps) {
  const Heading = `h${headingLevel}` as const;

  return (
    // A plain div. Making every card a <section> with a name would add a landmark for each one.
    <div className="card">
      {/* Do not render a heading with nothing in it. */}
      {title.trim() !== '' && <Heading>{title}</Heading>}
      {children}
    </div>
  );
}

/*
 * Approach 2: composition. The consumer writes the heading.
 *
 *   <CardShell>
 *     <h2>Recent activity</h2>
 *   </CardShell>
 *
 * Trade-offs: the page decides everything about the heading, including its content and attributes, and the
 * component stays simple. The cost is that nothing enforces that a heading is present or that its level
 * fits; that has to come from documentation, review, linting, or a test of the rendered output.
 */
type CardShellProps = {
  children: ReactNode;
};

export function CardShell({ children }: CardShellProps) {
  return <div className="card">{children}</div>;
}

/*
 * The page owns the hierarchy. The same Card appears at two levels because it sits at two depths.
 */
export function ExamplePage() {
  return (
    <main>
      <h1>Account</h1>

      <Card title="Recent activity" headingLevel={2}>
        <p>Invoice 1042 was paid.</p>
        {/* Inside the h2 section above, so this one is a level 3. */}
        <Card title="Today" headingLevel={3} />
      </Card>

      <CardShell>
        <h2>Billing</h2>
        <p>Next invoice on the 1st.</p>
      </CardShell>
    </main>
  );
}

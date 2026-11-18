import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ExampleButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: ReactNode;
  isLoading?: boolean;
  loadingLabel?: string;
};

/**
 * An educational example: use the browser's native button semantics.
 * This is not a replacement for Lutra UI's production Button component.
 */
export function Button({
  children,
  disabled = false,
  isLoading = false,
  loadingLabel = 'Working…',
  type = 'button',
  ...buttonProps
}: ExampleButtonProps) {
  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
    >
      {isLoading ? loadingLabel : children}
    </button>
  );
}

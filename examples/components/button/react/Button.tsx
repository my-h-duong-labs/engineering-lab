import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export function Button({ type = 'button', ...props }: ButtonProps) {
  return <button type={type} {...props} />;
}

// Example: <Button onClick={() => console.log('Saved')}>Save</Button>

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

afterEach(cleanup);

describe('educational Button example', () => {
  it('defaults to a non-submitting native button', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' }).getAttribute('type')).toBe(
      'button',
    );
  });

  it('respects an explicit submit type', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button', { name: 'Submit' }).getAttribute('type')).toBe(
      'submit',
    );
  });

  it('supports standard keyboard activation without custom key handlers', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Continue</Button>);
    const button = screen.getByRole('button', { name: 'Continue' });
    button.focus();
    await user.keyboard('{Enter}');
    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('prevents activation when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button disabled onClick={onClick}>Delete</Button>);
    const button = screen.getByRole('button', { name: 'Delete' }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('exposes loading state, communicates progress and prevents duplicate actions', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button isLoading loadingLabel="Saving…" onClick={onClick}>Save</Button>);
    const button = screen.getByRole('button', { name: 'Saving…' }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('forwards native button attributes', () => {
    render(<Button name="intent" value="publish" aria-describedby="hint">Publish</Button>);
    const button = screen.getByRole('button', { name: 'Publish' });
    expect(button.getAttribute('name')).toBe('intent');
    expect(button.getAttribute('value')).toBe('publish');
    expect(button.getAttribute('aria-describedby')).toBe('hint');
  });
});

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'example-button',
  standalone: true,
  template: `
    <button type="button" [disabled]="disabled()" (click)="activated.emit()">
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  readonly disabled = input(false);
  readonly activated = output<void>();
}

// Example:
// <example-button [disabled]="isSaving" (activated)="save()">Save</example-button>

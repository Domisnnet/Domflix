import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a *ngIf="routerLink" [routerLink]="routerLink" [ngClass]="classes">
      <ng-content></ng-content>
    </a>
    <button *ngIf="!routerLink" [type]="type" [ngClass]="classes" (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() routerLink?: string | any[];
  @Input() type: 'button' | 'submit' = 'button';
  @Input() onClick = new EventEmitter<Event>();

  get classes() {
    return {
      'btn': true,
      'btn-primary': this.variant === 'primary',
      'btn-outline': this.variant === 'outline',
    };
  }
}

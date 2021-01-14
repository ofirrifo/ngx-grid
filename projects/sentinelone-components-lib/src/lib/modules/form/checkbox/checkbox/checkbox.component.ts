import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'soc-checkbox',
  template: `
    <div class="checkbox" [class.checked]="checked" [class.indeterminate]="indeterminate" (click)="checked = !checked">
      <div *ngIf="indeterminate; else vMarker" class="indeterminate-indicator"></div>
      <ng-template #vMarker>
        <svg width="14px" *ngIf="checked" xml:space="preserve" class="mat-checkbox-checkmark" focusable="false" version="1.1" viewBox="0 0 24 24">
            <path class="mat-checkbox-checkmark-path" d="M4.1,12.7 9,17.6 20.3,6.3" fill="none" stroke="white"></path>
        </svg>
      </ng-template>
    </div>
  `,
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Input() indeterminate = false;
  @Input() checked = false;
}

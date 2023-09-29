import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CDCountClass } from '../../cd-count.class';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends CDCountClass {

  @Input() label = 'Submit'
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
}

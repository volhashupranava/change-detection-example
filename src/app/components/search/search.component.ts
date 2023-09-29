import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CDCountClass } from '../../cd-count.class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent extends CDCountClass {

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(event: KeyboardEvent): void {
    const target =  event.target as HTMLInputElement;
    this.searchChange.emit(target.value);
  }
}

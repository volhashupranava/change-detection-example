import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../services/form.service';
import { CDCountClass } from '../../cd-count.class';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent extends CDCountClass {
  @Input() item!: Item;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormService, Item } from '../../services/form.service';
import { CDCountClass } from '../../cd-count.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent extends CDCountClass {

  readonly items$ = this.formService.items$;

  @Input() text = 'Some text';

  constructor(private readonly formService: FormService) {
    super();
  }

  identifyItem(i: number, item: Item): number {
    return item.id;
  }
}

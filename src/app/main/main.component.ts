import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CDCountClass } from '../cd-count.class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent extends CDCountClass {

}

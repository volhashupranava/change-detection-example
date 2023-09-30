import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CDCountClass } from '../cd-count.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends CDCountClass {

  clickCount = 0;
  searchValue = '';

  onButtonClick(): void {
    this.clickCount++;
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
  }
}

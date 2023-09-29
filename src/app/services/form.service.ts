import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FormItem {
  firstName: string;
  lastName: string;
}

export type Item = FormItem & {
  id: number;
}

const mockData: FormItem[] = [
  { firstName: 'Maisie', lastName: 'Collier' },
  { firstName: 'Keenan', lastName: 'Callahan' },
  { firstName: 'Bill', lastName: 'Jefferson' },
  { firstName: 'Imogen', lastName: 'Nash' },
  { firstName: 'Safwan', lastName: 'Eaton' },
  { firstName: 'Noel', lastName: 'Mullins' },
  { firstName: 'Jonathan', lastName: 'Crane' },
  { firstName: 'Dylan', lastName: 'Mcneil' },
];

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private readonly itemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this.generateItems(20));
  readonly items$: Observable<Item[]> = this.itemsSubject.asObservable();

  addNewItem(item: FormItem): void {
    const itemWithId: Item = {
      ...item,
      id: this.getCurrentId(),
    }

    this.itemsSubject.next([itemWithId, ...this.itemsSubject.value]);
  }

  private generateItems(itemsCount: number): Item[] {
    const mockDataLength = mockData.length;
    const items: Item[] = [];
    let currentIndex = 0;
    for (let i = 0; i < itemsCount; i++) {
      currentIndex = i >= mockDataLength ? i % mockDataLength : i;
      items.push({ ...mockData[currentIndex], id: i });
    }
    return items.reverse();
  }

  private getCurrentId(): number {
    return this.itemsSubject.value[0].id + 1;
  }

}

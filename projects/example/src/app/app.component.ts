import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({height: 0}),
        animate('200ms', style({height: '*'})),
      ]),
      transition(':leave', [
        animate('200ms', style({height: 0}))
      ])
    ]),
  ]
})
export class AppComponent {
  header = cells;
  rows: any = [];
  map: any = {};
  headerCheckbox = true;
  headerCheckboxIndeterminate = false;

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.rows.push({cells, open: false, checked: this.headerCheckbox});
    }
  }

  pin(index: number): void {
    this.map[index] = true;
  }

  unpin(index: number): void {
    delete this.map[index];
  }


  headerCheckboxClicked(): void {
    this.headerCheckbox = !this.headerCheckbox;
    this.rows = this.rows.map((row: any) => {
      row.checked = this.headerCheckbox;
      return row;
    });
  }

  rowCbClicked(row: any): void {
    row.checked = !row.checked;
    if (row.checked === false) {
      this.headerCheckbox = false;
    } else {
      this.headerCheckbox = this.rows.find((_row: any) => !_row.checked) === void 0;
    }
  }
}

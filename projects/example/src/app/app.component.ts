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
        style({ height: 0 }),
        animate('200ms', style({ height: '*' })),
      ]),
      transition(':leave', [
        animate('200ms', style({ height: 0 }))
      ])
    ]),
  ]
})
export class AppComponent {
  header = cells;
  rows = [
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
    {cells, open: false},
  ];
  map: any = {};

  pin(index: number): void {
    this.map[index] = true;
  }

  unpin(index: number): void {
    delete this.map[index];
  }
}

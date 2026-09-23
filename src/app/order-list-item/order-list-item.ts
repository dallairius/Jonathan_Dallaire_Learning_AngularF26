import {Component, input, output} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {ContentEvent} from '../content-event';



@Component({
  imports: [],
  selector: 'app-order-list-item',
  styleUrl: './order-list-item.css',
  templateUrl: './order-list-item.html',
})
export class OrderListItem {
  orderInput = input.required<Tacos>();
  expanded = false;
  opened = output<Tacos>();

  toggle(): void {
    this.opened.emit(this.orderInput());

    this.expanded = !this.expanded;
  }
}

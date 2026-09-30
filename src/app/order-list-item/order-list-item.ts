import {Component, input, output, signal} from '@angular/core';
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
  contentEvent: ContentEvent = {id:0,action:"opened"};
  isRemoved = output<ContentEvent>();

  toggle(): void {
    this.expanded = !this.expanded;
  }
  delete(): void{
    this.contentEvent.id = this.orderInput().orderId;
    this.isRemoved.emit(this.contentEvent);
  }

}

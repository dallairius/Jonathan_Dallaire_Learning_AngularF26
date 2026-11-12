import {Component, input, output, signal} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {ContentEvent} from '../content-event';
import {RouterLink} from '@angular/router';
import {FoodBanks} from '../Shared/Models/food-banks';
import {LowerCasePipe, SlicePipe, TitleCasePipe} from '@angular/common';



@Component({
  imports: [
    RouterLink,
    TitleCasePipe,
    LowerCasePipe,
    SlicePipe
  ],
  selector: 'app-order-list-item',
  styleUrl: './order-list-item.css',
  templateUrl: './order-list-item.html',
})
export class OrderListItem {
  orderInput = input.required<FoodBanks>();
  expanded = false;
  contentEvent: ContentEvent = {id:"0",action:"opened"};
  isRemoved = output<ContentEvent>();

  toggle(): void {
    this.expanded = !this.expanded;
  }
  delete(): void{
    this.contentEvent.id = this.orderInput().id;
    this.isRemoved.emit(this.contentEvent);
  }

}

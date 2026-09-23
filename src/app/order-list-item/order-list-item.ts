import {Component, input} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';



@Component({
  imports: [],
  selector: 'app-order-list-item',
  styleUrl: './order-list-item.css',
  templateUrl: './order-list-item.html',
})
export class OrderListItem {
  orderInput = input.required<Tacos>();
}

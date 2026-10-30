import {Component, computed, inject, input} from '@angular/core';
import {TacoService} from '../services/taco-service';
import {OrderListItem} from '../order-list-item/order-list-item';

@Component({
  imports: [
    OrderListItem
  ],
  selector: 'app-taco-detail',
  styleUrl: './taco-detail.css',
  templateUrl: './taco-detail.html',
})
export class TacoDetail {
  id = input.required<string>();

  private tacoService = inject(TacoService);

  order = computed(() =>
  this.tacoService.orderArray().find(b => b.orderId === Number(this.id())))
}

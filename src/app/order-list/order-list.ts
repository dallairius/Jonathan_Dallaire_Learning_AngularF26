import {Component, computed, effect, inject} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {OrderListItem} from '../order-list-item/order-list-item';
import {TacoService} from '../services/taco-service';
import {ContentEvent} from '../content-event';




@Component({
  imports: [
    OrderListItem
  ],
  selector: 'app-order-list',
  styleUrl: './order-list.css',
  templateUrl: './order-list.html',
})
export class OrderList {
  private tacoService = inject(TacoService);

  orderArray = this.tacoService.orderArray

  comboOrders = computed(() => this.orderArray().filter(b => b.combo))
  comboCount = computed(() => this.comboOrders().length)

  orderCount = computed(() => this.orderArray().length)

  constructor() {
    effect(() => {
      console.log('Orders on the screen: ', this.orderCount());
    });
  }

  onOrderOpened(event: ContentEvent ){
    console.log(event);
    this.tacoService.removeOrder(this.orderArray().find(t => t.orderId == event.id));
  }
}

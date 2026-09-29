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
  /*orderArray: Tacos[] = [{orderId:0,customerName:"John Doe", combo:false,howMany:"3",whichProtein:"beef"},
    {orderId:1,customerName:"Jane Dough",       combo:true, howMany:"2",whichProtein:"chicken"},
    {orderId:2,customerName:"Philippe Egalite", combo:false,howMany:"1",whichProtein:"pork"},
    {orderId:3,customerName:"Bob Sponge",       combo:true, howMany:"5",whichProtein:"beef"},
  ]*/

  comboOrders = computed(() => this.orderArray().filter(b => b.combo))
  comboCount = computed(() => this.comboOrders().length)

  orderCount = computed(() => this.orderArray().length)

  constructor() {
    effect(() => {
      console.log('Orders on the screen: ', this.orderCount());
    });
  }

  onOrderOpened($event: ContentEvent){

  }
}

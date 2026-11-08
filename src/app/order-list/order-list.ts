import {Component, computed, effect, inject, signal} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {OrderListItem} from '../order-list-item/order-list-item';
import {TacoService} from '../services/taco-service';
import {ContentEvent} from '../content-event';
import {RouterLink} from '@angular/router';
import {Guard} from '../services/guard';
import {APIService} from '../services/apiservice';
import {FoodBanks} from '../Shared/Models/food-banks';




@Component({
  imports: [
    OrderListItem,
    RouterLink
  ],
  selector: 'app-order-list',
  styleUrl: './order-list.css',
  templateUrl: './order-list.html',
})
export class OrderList {
  private tacoService = inject(TacoService);
  private guard = inject(Guard);
  private api = inject(APIService);

  foodBankList = signal<FoodBanks[]>([]);
  errorMessage = signal<string>('');

  ngOnInit(): void {
    this.api.getFoodBanks().subscribe({
      next: (data) => {
        this.foodBankList.set(data);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load FoodBanks.');
        console.error(err);
      }
    })
  }

  canEdit = computed(() => this.guard.guardEnabled());

  orderArray = this.tacoService.orderArray
  apiTest = this.tacoService.apiUrl


  comboOrders = computed(() => this.orderArray().filter(b => b.combo))
  comboCount = computed(() => this.comboOrders().length)
  orderCount = computed(() => this.orderArray().length)



  constructor() {
    effect(() => {
      console.log('Orders on the screen: ', this.orderCount());
    });
  }

  onOrderRemoved(event: ContentEvent ){
    this.tacoService.removeOrder(this.orderArray().find(t => t.orderId == event.id));
  }

  changeEdit(){
    this.guard.onClick()
    console.log(this.guard.guardEnabled())
  }


}

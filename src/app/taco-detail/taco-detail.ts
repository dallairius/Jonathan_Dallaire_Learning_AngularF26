import {Component, computed, inject, input, signal} from '@angular/core';
import {TacoService} from '../services/taco-service';
import {OrderListItem} from '../order-list-item/order-list-item';
import {APIService} from '../services/apiservice';
import {OrderList} from '../order-list/order-list';
import {FoodBanks} from '../Shared/Models/food-banks';

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

  order = computed(() =>
  this.foodBankList().find(o => o.id === this.id()))
}

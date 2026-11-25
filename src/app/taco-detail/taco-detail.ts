import {Component, computed, inject, input, signal} from '@angular/core';
import {TacoService} from '../services/taco-service';
import {OrderListItem} from '../order-list-item/order-list-item';
import {APIService} from '../services/apiservice';
import {OrderList} from '../order-list/order-list';
import {FoodBanks} from '../Shared/Models/food-banks';
import {BoldPipe} from '../pipes/bold-pipe';
import {SavedServices} from '../services/saved-services';

@Component({
  imports: [
    OrderListItem,
    BoldPipe
  ],
  selector: 'app-taco-detail',
  styleUrl: './taco-detail.css',
  templateUrl: './taco-detail.html',
})
export class TacoDetail {
  private openedTime = 0;
  private dateOpened: any;
  private savedService = inject(SavedServices);
  savedList = computed(() => this.savedService.savedIDs());

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
    // Performance.now returns time from browser window open instead of epoch
    this.openedTime = performance.now()
    this.dateOpened = new Date(Date.now());
    console.log("[lifecycle] opened on "+this.dateOpened)
  }
  ngOnDestroy(){
    const pageDuration = (performance.now()- this.openedTime)/1000;
    console.log(`[lifecycle] Component was open for ${pageDuration.toFixed(2)} seconds`);
  }

  toggleSaved(){
    this.savedService.toggleSaved(this.id());
  }

  order = computed(() =>
  this.foodBankList().find(o => o.id === this.id()))
}

import {Component, computed, effect, inject, signal} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {OrderListItem} from '../order-list-item/order-list-item';
import {TacoService} from '../services/taco-service';
import {ContentEvent} from '../content-event';
import {RouterLink} from '@angular/router';
import {Guard} from '../services/guard';
import {APIService} from '../services/apiservice';
import {FoodBanks} from '../Shared/Models/food-banks';
import {NewDirective} from '../directives/new-directive';
import {SavedServices} from '../services/saved-services';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {SlicePipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatToolbar} from '@angular/material/toolbar';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';


@Component({
  imports: [
    NewDirective,
    OrderListItem,
    RouterLink,
    MatCheckbox,
    MatSlideToggle,
    SlicePipe,
    MatButton,
    MatPaginator,
    MatToolbar,
    MatSidenavContainer,
    MatNavList,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatIconButton
  ],
  selector: 'app-order-list',
  styleUrl: './order-list.css',
  templateUrl: './order-list.html',
})
export class OrderList {
  private tacoService = inject(TacoService);
  private guard = inject(Guard);
  private api = inject(APIService);

  private savedService = inject(SavedServices);
  savedList = computed(() => this.savedService.savedIDs());
  lightMode = computed(() => this.savedService.isLightMode())

  foodBankList = signal<FoodBanks[]>([]);
  errorMessage = signal<string>('');
  loading = signal(false);
  error = signal<string | null>(null);

  pageIndex = signal<number>(0);
  pageSize = signal<number>(10);

  private breakpoints = inject(BreakpointObserver);

  isHandset = toSignal(
    this.breakpoints.observe(Breakpoints.Handset).pipe(map((r) => r.matches)),
    { initialValue: false }
  );

  ngOnInit(): void{
    this.load();
  }
  load(): void {
    this.loading.set(true); this.error.set(null);
    this.api.getFoodBanks().subscribe({
      next: (data) => {
        this.foodBankList.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load FoodBanks.');
        this.loading.set(false);
        console.error(err);
      }
    })
  }

  canEdit = computed(() => this.guard.guardEnabled());

  apiTest = this.tacoService.apiUrl


  //comboOrders = computed(() => this.orderArray().filter(b => b.combo))
  //comboCount = computed(() => this.comboOrders().length)
  orderCount = computed(() => this.foodBankList().length)



  constructor() {
    effect(() => {
      console.log('Orders on the screen: ', this.orderCount());
    });
  }

  onOrderRemoved(event: ContentEvent ){
    this.removeOrder(this.foodBankList().find(t => t.id == event.id));
  }

  removeOrder(o: FoodBanks | undefined){
    if(typeof o === "object") {
      this.foodBankList.update(list => list.filter(t => t.id !== o.id));
    }
  }

  updateContent(updated: FoodBanks) {
    this.foodBankList.update(list => list.map(f => f.id === updated.id ? updated : f));
  }

  toggleLightMode(){
    this.savedService.toggleLightMode();
  }

  changeEdit(){
    this.guard.onClick()
    console.log(this.guard.guardEnabled())
  }

  onPageChange(event: PageEvent): void{
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    console.log(event.pageSize);
  }


}

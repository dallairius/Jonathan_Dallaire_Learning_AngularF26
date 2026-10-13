import {inject, Injectable, Service, signal} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';
import {APP_CONFIG} from '../taco-config';

@Injectable({ providedIn: 'root'})
export class MockService {
  private orders = signal<Tacos[]>([
    {orderId:0,customerName:"test1", combo:false,howMany:"3",whichProtein:"beef"},
    {orderId:1,customerName:"test2",       combo:true, howMany:"2",whichProtein:"chicken"}
  ])

  orderArray = this.orders.asReadonly();
  addOrder(o: Tacos){
    this.orders.update(list => [...list,o]);
  }

  removeOrder(o: Tacos | undefined){
    if(typeof o === "object") {
      this.orders.update(list => list.filter(t => t.orderId !== o.orderId));
    }
  }

  private config = inject(APP_CONFIG)
  apiUrl = this.config.apiBaseUrl
}

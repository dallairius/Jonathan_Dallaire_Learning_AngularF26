import {Service, signal} from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';

@Service()
export class TacoService {
  private tacos = signal<Tacos[]>([{orderId:0,customerName:"John Doe", combo:false,howMany:"3",whichProtein:"beef"},
    {orderId:1,customerName:"Jane Dough",       combo:true, howMany:"2",whichProtein:"chicken"},
    {orderId:2,customerName:"Philippe Egalite", combo:false,howMany:"1",whichProtein:"pork"},
    {orderId:3,customerName:"Bob Sponge",       combo:true, howMany:"5",whichProtein:"beef"},
  ])

  orderArray = this.tacos.asReadonly();
}

import { Component } from '@angular/core';
import {Tacos} from '../Shared/Models/tacos';


let orderArray: Tacos[] = [{orderId:0,customerName:"John Doe", combo:false,howMany:"3",whichProtein:"beef"},
  {orderId:1,customerName:"Jane Dough",       combo:true, howMany:"2",whichProtein:"chicken"},
  {orderId:2,customerName:"Philippe Egalite", combo:false,howMany:"1",whichProtein:"pork"},
  {orderId:3,customerName:"Bob Sponge",       combo:true, howMany:"5",whichProtein:"beef"},
]

@Component({
  imports: [],
  selector: 'app-order-list',
  styleUrl: './order-list.css',
  templateUrl: './order-list.html',
})
export class OrderList {}

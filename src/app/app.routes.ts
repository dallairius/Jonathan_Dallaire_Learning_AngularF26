import { Routes } from '@angular/router';
import {OrderList} from './order-list/order-list';
import {TacoDetail} from './taco-detail/taco-detail';

export const routes: Routes = [
  {path: 'orders',component: OrderList},
  {path: 'orders/:id', component: TacoDetail}
];

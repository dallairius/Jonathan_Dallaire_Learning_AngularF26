import { Routes } from '@angular/router';
import {OrderList} from './order-list/order-list';
import {authGuard} from './auth-guard';

export const routes: Routes = [
  {path: '', component:OrderList},
  {path: 'orders',
    loadComponent: () => import(
      './order-list/order-list').then(m => m.OrderList)
  },
  {path: 'orders/:id',
    loadComponent: () => import(
      './taco-detail/taco-detail').then(m => m.TacoDetail)
  },
  {path:'orderForm',
    loadComponent: () => import(
      './order-form/order-form').then(m => m.OrderForm)
  },
  {path:'orderForm/:id',
    loadComponent: () => import(
      './order-form/order-form').then(m => m.OrderForm)
  ,canActivate: [authGuard]}

];

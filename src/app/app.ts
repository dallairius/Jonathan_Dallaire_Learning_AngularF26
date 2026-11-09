import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tacos } from './Shared/Models/tacos'
import {OrderList} from './order-list/order-list';
import {Guard} from './services/guard';
import {LoadingService} from './services/loading-service';

@Component({
  imports: [RouterOutlet, OrderList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Jonathan-Dallaire-Learning-AngularF26');
  loadingService = inject(LoadingService);
}

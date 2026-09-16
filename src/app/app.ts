import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tacos } from './Shared/Models/tacos'

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Jonathan-Dallaire-Learning-AngularF26');
  name = 'John';
  lastName = 'Dallaire';

  tacoList: Tacos[] = [
    {
      orderId: 1,
      customerName: 'Jonathan Dallaire',
      combo: false,
      whichProtein: 'beef',
      howMany: 3,
    },
    {
      orderId: 2,
      customerName: 'Fidel Cashflow',
      combo: true,
      whichProtein: 'chicken',
      howMany: 2,
    },
    {
      orderId: 3,
      customerName: 'John OneWay',
      combo: true,
      whichProtein: 'bean',
      howMany: 5,
    },
    {
      orderId: 4,
      customerName: 'Audrey Caulfield',
      combo: false,
      whichProtein: 'pork',
      howMany: 1,
    },
    {
      orderId: 5,
      customerName: 'Josh Brown',
      combo: true,
      whichProtein: 'chicken',
      howMany: 4,
    },
    {
      orderId: 6,
      customerName: 'Felix Leclerc',
      combo: true,
      whichProtein: 'beef',
      howMany: 4,
    },
  ];
}

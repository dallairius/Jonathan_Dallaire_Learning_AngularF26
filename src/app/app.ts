import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Delivery } from './Shared/Models/delivery';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Jonathan-Dallaire-Learning-AngularF26');
  name = "John";
  lastName = "Dallaire";

  deliveryList : Delivery[] = [
    {id:1,name:"Jonathan Dallaire"},
    {id:2,name:"Robert Village"}

]
}

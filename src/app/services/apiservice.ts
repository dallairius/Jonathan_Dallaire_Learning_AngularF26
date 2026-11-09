import { HttpClient } from "@angular/common/http";
import {Service, inject, signal} from '@angular/core';
import {APP_CONFIG} from '../taco-config';
import { Observable } from "rxjs/internal/Observable";
import {Tacos} from '../Shared/Models/tacos';
import {FoodBanks} from '../Shared/Models/food-banks';

@Service()
export class APIService {
  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  private url = `${this.config.apiBaseUrl}`


  getById(id: string): Observable<FoodBanks>{
    return this.http.get<FoodBanks>(`${this.url}/${id}`);
  }

  getFoodBanks(): Observable<FoodBanks[]>{
    return this.http.get<FoodBanks[]>(`${this.url}/`);
  }
}

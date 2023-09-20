import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor(private _http: HttpClient) { }
  getData() {
    return this._http.get(`https://api.rawg.io/api/games?dates=2023-01-01,2023-09-30&platforms=4&key=58360e7a96af4458a0fb6983689d0ee8&language=esp`)
  }
}

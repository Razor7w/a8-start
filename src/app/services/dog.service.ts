import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRandomDog() {
    this.httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe(data => {
      console.log('data dogs en servicio -->', data);
    });
  }

  getAllBreads() {
    this.httpClient.get('https://dog.ceo/api/breeds/list/all').subscribe(data => {
      console.log('all dogs en servicio -->', data);
    });
  }
}

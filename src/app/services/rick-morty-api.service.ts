import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/characters';
import { AllCharacters } from '../interfaces/all-characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  private listCharacters: number[] = [];

  getRandomCharacters() {
    for (let index = 0; index <12; index++){
      this.listCharacters[index] = Math.floor(Math.random() * 671);
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>('https://rickandmortyapi.com/api/character/' + id);
  }

  getPoolCharacter(): Observable<Character[]> {
    this.getRandomCharacters();
    return this.httpClient.get<Character[]>('https://rickandmortyapi.com/api/character/' + this.listCharacters);
  }

  getAllCharacters(): Observable<AllCharacters> {
    return this.httpClient.get<AllCharacters>('https://rickandmortyapi.com/api/character/');
  }
}

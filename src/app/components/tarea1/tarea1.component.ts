import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';
import { Character } from '../../interfaces/characters';

interface Characters {
  [index: number]: {
    id: number;
    name: string;
    gender: string;
    image: string;
    species: string;
    status: string;
    origin: {
      name: string
    }
  };
}

@Component({
  selector: 'app-tarea1',
  templateUrl: './tarea1.component.html',
  styleUrls: ['./tarea1.component.css']
})

export class Tarea1Component implements OnInit {
  public characters: Characters;
  public currentId: number;
  public currentName: string;
  public currentGender: string;
  public currentImage: string;
  public currentSpecies: string;
  public currentStatus: string;
  public currentOrigin: string;
  public poolCharacters: Character[];
  constructor(
    private rickMortyApiService: RickMortyApiService,
    private router: Router
  ) {
    this.characters = [
      {
        id: 0,
        name: '',
        gender: '',
        image: '',
        species: '',
        status: '',
        origin: { name: ''}
      }
    ];
  }
  ngOnInit() {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        // console.log(response.data.results);
        this.characters = response.data.results.slice(0, 5);
        console.log(this.characters);
        this.setCharacter(0);

      });

    this.rickMortyApiService.getPoolCharacter().subscribe(resp => {
      console.log('My characters --> ', resp );
      this.poolCharacters = resp;
    })
    this.rickMortyApiService.getAllCharacters().subscribe(resp => {
      console.log(resp.results[0].name);
    }, error => {
      console.log(error);
    });
  }

  setCharacter(index) {
    this.currentId = this.characters[index].id;
    this.currentName = this.characters[index].name;
    this.currentGender = this.characters[index].gender;
    this.currentImage = this.characters[index].image;
    this.currentSpecies = this.characters[index].species;
    this.currentStatus = this.characters[index].status;
    this.currentOrigin = this.characters[index].origin.name;
  }

  nextCharacter() {
    // console.log('nextCharacter');
    if ( this.currentId === 5 ) {
      this.currentId = 0;
    }
    this.setCharacter(this.currentId);
  }
  previousCharacter() {
    // console.log('previousCharacter');
    if ( this.currentId === 1 ) {
      this.currentId = 6;
    }
    const index = this.currentId - 2;
    this.setCharacter(index);
  }

  characterDetail(id: number) {
    this.router.navigate(['characters', 'detail', id]);
  }

}

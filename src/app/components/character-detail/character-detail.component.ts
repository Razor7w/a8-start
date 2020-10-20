import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyApiService } from '../../services/rick-morty-api.service';
import { Character } from '../../interfaces/characters';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public character: Character;
  public idCharacter: any;
  public paramsRoute: [string];

  constructor(
    private rickMortyApiService: RickMortyApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(params => {
      console.log('params details -->', params);
      this.idCharacter = params.get('id');

    });

    this.rickMortyApiService.getCharacter(this.idCharacter).subscribe(resCharacter => {
      this.character = resCharacter;
      console.log('my character -->', this.character);
    }, error => {
      console.log('get error subscribe', error);
    })
  }

}

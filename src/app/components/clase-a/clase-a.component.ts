import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-clase-a',
  templateUrl: './clase-a.component.html',
  styleUrls: ['./clase-a.component.css']
})
export class ClaseAComponent implements OnInit {
  public name = 'Shiba Inu';
  public available = true;
  public skills: string[] = ['Amigable', 'Leal', 'Fiel', 'Prueba Trim'];
  public categoria = 'perro';
  public srcImg = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public birthday: Date = new Date(2020, 5, 17);
  constructor(
    private dogService: DogService
  ) { }

  @Output() myEvent = new EventEmitter<string>();
  @Input() morePhotos: boolean;

  ngOnInit() {
    this.dogService.getRandomDog();
    this.myEvent.emit(this.srcImg);
  }

  photo1(event: any) {
    this.srcImg = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    console.log(event);
  }

  photo2() {
    this.srcImg = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  showName(event: any) {
    console.log(event);
  }

}

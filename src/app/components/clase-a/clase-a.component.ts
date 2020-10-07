import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-clase-a',
  templateUrl: './clase-a.component.html',
  styleUrls: ['./clase-a.component.css']
})
export class ClaseAComponent implements OnInit {
  public name = 'Shiba Inu';
  public available = true;
  public skills: string[] = ['Amigable', 'Leal', 'Fiel'];
  public categoria = 'perro';
  public srcImg = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  constructor() { }

  @Output() myEvent = new EventEmitter<string>();
  @Input() morePhotos: boolean;

  ngOnInit() {
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

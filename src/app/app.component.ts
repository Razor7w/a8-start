import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a8-start';
  public photoUsed: string;
  public photoUsed2: string;
  public morePhotosPadres: boolean;

  constructor() {
    this.morePhotosPadres = false;
  }

  recieverMyEvent(componentReference) {
    // console.log(event);
    // this.photoUsed = event;
    console.log('componentReference -->', componentReference.srcImg);
    this.photoUsed = componentReference.srcImg;
  }

  recieverMyEvent2(event: string) {
    console.log('Event -->', event);
    this.photoUsed2 = event;
  }
}

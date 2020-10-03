import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-a',
  templateUrl: './clase-a.component.html',
  styleUrls: ['./clase-a.component.css']
})
export class ClaseAComponent implements OnInit {
  public name = 'Shiba Inu';
  public available = true;
  public skills: string[] = ['Amigable', 'Leal', 'Fiel'];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imagePath  = "assets/logo-my-movies.png";
  title = "Lista de Filmes";
  courseName = "App Web e Mobile em um só projeto com Angular e NativeScript";
  description = "Lista de Filmes desenvolvido para Web e Mobile(Android e Ios) compartilhando e reaproveitando 70% do código fonte no mesmo projeto";
  buttonText = "SAIBA MAIS";
  ngOnInit() {
  }

}

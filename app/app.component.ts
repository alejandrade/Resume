import { Component, Input, OnInit } from '@angular/core';
import { TitleService } from './data/title.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit  {
	myName: string = "Alejandro Andrade";
	constructor(private titleService: TitleService) { }

 }

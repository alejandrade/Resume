import { Component, Input } from '@angular/core';
import { TitleService } from './data/title.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent   {
	myName: string = "Alejandro Andrade";

 }

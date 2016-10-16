import { Component, Input } from '@angular/core';
import { Contact } from '../data/contact';
import { TitleService } from '../data/title.service';


@Component({
  selector: 'my-about',
  moduleId: module.id,
  templateUrl: 'about.component.html'

})
export class AboutComponent  {
	  contact: Contact = new Contact();
 	//  
	pageName: string = "About";



}
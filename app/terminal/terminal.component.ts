import { Component, Input,HostListener, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'my-terminal',
  moduleId: module.id,
  templateUrl: 'terminal.component.html',
  styleUrls: ['terminal.component.css'],
})




export class TerminalComponent {

	
	terminalData: TerminalData = new TerminalData();
	modalBody: String = "";
	modalTitle: String = "";

	 @ViewChild('terminalContainer') terminalContainer: ElementRef;
	 @ViewChild('myModal') myModal: ElementRef;

  	@HostListener('document:keydown ', ['$event'])
	  handleKeyboardEvent(event: KeyboardEvent) {
	  	console.log(event);
	  	
	    if(event.key == "Enter"){

	    	this.terminalData.terminal +="$"+ this.terminalData.inputString;
	    	this.terminalData.terminal +="<br>";

	    	if(this.terminalData.inputString.toLowerCase() == "exec about"){
	    		this.showModal("Cv");
	    	}else if (this.terminalData.inputString.toLowerCase() == "clear"){
	    		this.terminalData.terminal = "$ In order to run this type 'exec {{class-name}}' without quotes then press enter, so to run About page you would type 'exec about'.<br>";
	    	}

	    	this.terminalData.inputString = "";

			this.terminalContainer.nativeElement.scrollTop = this.terminalContainer.nativeElement.scrollHeight+100;
	    }else if(event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode == 32){
	    	this.terminalData.inputString += event.key;

	    }else if(event.key == "Backspace"){
	    	let tis = this.terminalData.inputString;
	    	this.terminalData.inputString = this.terminalData.inputString.substr(0,tis.length-1);
	    }


	  }

  showModal(title: string){
  	this.myModal.nativeElement.style.display = "block";
  	this.modalTitle = title;
  	if(title=="Cv")
  		this.modalBody = this.aboutBody;
  }

  aboutBody:string = `
    <p>
	  I'm currently in the market for  
	  Interesting technology, 
	  hard working people, and good pay.
	</p>
  <ul class="marginator">
	  <li>Software Developer</li>
	  <li>Gamer</li>
	  <li>Adventurer</li>
	  <li>Workaholic</li>
	  <li>Sculpter</li>
  </ul>
  <p>Self driven multi talented Technology Expert
   with 4 years of professional experience
  and a few more in amature experience. 
  I enjoy learning and creating new technology for a purpose. 
  I've been in the health industry as team lead for the last 2 
  years which thought me a lot about security and regulation. 
  But it also thought me how to manage people, which is much 
  more complicated than a computer. It has been an interesting journey.

  </p>
  <p>
  	As a hobby I enjoy making games, odd projects 
  	and the occasional bike ride. My dream is to make 
  	something that will help people in some way...<br>
  	That said my technical skills are but not limited to (in decending order):
  </p>

    <ul class="marginator">
      <li>Leading a Team</li>
      <li>Java [Spring, Jersey, Tomcat, etc]</li>
      <li>Amazon Web Services(AWS)</li>
      <li>Linux Servers</li>
      <li>Sql Databases</li>
	  <li>JavaScript/Typescript [Many libraries]</li>
	  <li>Ruby[On Rails!]</li>
	  <li>ChromeApps</li>
	  <li>Android</li>
	  <li>Encryption</li>
	  <li>Repurposing Open Source Projects</li>
	  <li>Mongo</li>
	  <li>Unity</li>
	  <li>and a bunch more...</li>
  </ul>

  `;

  closeModal(){
  	this.myModal.nativeElement.style.display = "none";
  }
  
}


export class TerminalData {
	terminal: string = "$ In order to run this type 'exec {{class-name}}' without quotes then press enter, so to run About page you would type 'exec about'.<br>";
	inputString: string = "";
}




export class Project{
	year: string;
	position: string;
	description: string;

}

const PROJECTS: Project[] = [
{year: "2012", position: "Junior Developer", 
description:`
	<h3>Summary</h3>
	<h4>Responsabilities</h4>
  <ul>
	  <li>Supporting Users</li>
	  <li>Custom Dashboard (WebDevelopment)</li>
	  <li>Workflow Design</li>
	  <li>Server Administration</li>
  </ul>
  <h4>Technologies Used</h4>
    <ul>
	  <li>JavaScript</li>
	  <li>Oracle(SQL Database)</li>
	  <li>ImageNow(Perceptive Software)</li>
	  <li>Java</li>
  </ul>
<p>
	If my story begins somewhere it would have to be here. This is the position 
	that thought me what it was like to work in a team, how to work with 
	a user and it showed me the importance of rigorous testing. I came into this 
	position green as gooseberry. I was a hot shot, I was proficient at hackathons 
	but nothing could prepare me to work with people.  
</p>
<p>
	People unlike computers are ilogical and in a proffessional environemnt they
	tend to be scared. Being a junior Developer; bottom of the totem pole; I was
	often blamed for all issues and often... it was my fault. The first problem
	I ran into was deadlines a month in I would hear things like "your promised me a month and it's been 5 weeks!","I'm just pushing you for what
	you said was alost done!". I quickly learned to obfusticate my dead lines 
	not like exagerate. As a great man once said:<br>
	<em class="oneTab">
	"Oh, you didn't tell him how long it would *really* take, did ya? 
	Oh, laddie. You've got a lot to learn if you want people to think of you as a miracle worker. "
    </em>
    <br>
    

</p>

`}
];

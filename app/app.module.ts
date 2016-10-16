import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleService } from './data/title.service';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    TerminalComponent,
    ExperienceComponent,
    AboutComponent
    ],
  providers: [TitleService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

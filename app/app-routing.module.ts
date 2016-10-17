import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent }   from './experience/experience.component';
import { AboutComponent }     from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'experience',  component: ExperienceComponent },
  { path: 'portfolio',  component: PortfolioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

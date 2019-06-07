import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

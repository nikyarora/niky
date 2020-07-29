import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component'
import { ExperienceComponent } from './modules/experience/experience.component'
import { AboutComponent } from './modules/about/about.component'
import { ProjectsComponent } from './modules/projects/projects.component'
import { PhotographyComponent } from './modules/photography/photography.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

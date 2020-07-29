import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { AboutComponent } from './modules/about/about.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { PhotographyComponent } from './modules/photography/photography.component';
import { BackgroundComponent } from './core/components/background/background.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    AboutComponent,
    ProjectsComponent,
    PhotographyComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

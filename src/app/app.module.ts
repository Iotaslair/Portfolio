import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent} from './components/home-page/home-page.component';
import { LandingComponent } from './components/home-page/landing/landing.component';
import { AboutComponent } from './components/home-page/about/about.component';
import { ProjectsComponent } from './components/home-page/projects/projects.component';
import { FooterComponent } from './components/home-page/footer/footer.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LandingComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }

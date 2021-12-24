import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsSoloComponent } from './projects-solo/projects-solo.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectsSoloComponent,
    ImprintComponent,
    AboutComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

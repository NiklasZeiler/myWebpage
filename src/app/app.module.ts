import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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
import { AboutSoloComponent } from './about-solo/about-solo.component';
import { SkillsComponent } from './skills/skills.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ContactSoloComponent } from './contact-solo/contact-solo.component';








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
    PrivacyComponent,
    AboutSoloComponent,
    SkillsComponent,
    ContactComponent,
    ContactSoloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

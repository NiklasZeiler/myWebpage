import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSoloComponent } from './about-solo/about-solo.component';
import { ContactSoloComponent } from './contact-solo/contact-solo.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectsSoloComponent } from './projects-solo/projects-solo.component';
import { SkillsComponent } from './skills/skills.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'projects-solo', component: ProjectsSoloComponent},
  {path: 'about-solo', component: AboutSoloComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact-solo', component: ContactSoloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

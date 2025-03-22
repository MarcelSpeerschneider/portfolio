import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  template: `
    <app-landing-page></app-landing-page>
    <app-about-me></app-about-me>
    <app-my-skills></app-my-skills>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
  `,
})
export class HomeComponent {

}

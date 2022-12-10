import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { OurvisionComponent } from './component/ourvision/ourvision.component';
import { OurServesComponent } from './component/our-serves/our-serves.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { OurClientComponent } from './component/our-client/our-client.component';
import { NavBarComponent } from './sheard/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OurvisionComponent,
    OurServesComponent,
    PortfolioComponent,
    OurClientComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

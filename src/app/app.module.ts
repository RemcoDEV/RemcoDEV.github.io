import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { MaterialModule } from './material.module';
import { FlexModule } from '@angular/flex-layout';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './Components/select-language/select-language.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    SkillsComponent,
    CoursesComponent,
    HomeComponent,
    NotfoundComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

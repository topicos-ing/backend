import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FooterComponent } from './footer/footer.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { CardComponent } from './card/card.component';
import { SerchComponent } from './serch/serch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    FooterComponent,
    ShowInformationComponent,
    CardComponent,
    SerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

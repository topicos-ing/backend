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
import { HttpClientModule } from '@angular/common/http';
import { ListcardsComponent } from './listcards/listcards.component';
import { OffcanvasMenuComponent } from './offcanvas-menu/offcanvas-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    FooterComponent,
    ShowInformationComponent,
    CardComponent,
    SerchComponent,
    ListcardsComponent,
    OffcanvasMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

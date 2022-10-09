import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarWDropdownComponent } from './components/navbar/navbar-w-dropdown/navbar-w-dropdown.component';
import { NavbarBottomComponent } from './components/navbar/navbar-bottom/navbar-bottom.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleCardComponent } from './components/cards/simple-card/simple-card.component';
import { GridSystemComponent } from './components/grid-system/grid-system.component';
import { Button1Component } from './components/buttons/button1/button1.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ModalBaseComponent } from './components/modals/modal-base/modal-base.component';
import { CardWApiComponent } from './components/cards/card-w-api/card-w-api.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarWDropdownComponent,
    NavbarBottomComponent,
    LoginFormComponent,
    LoginPageComponent,
    SimpleCardComponent,
    GridSystemComponent,
    Button1Component,
    CarrouselComponent,
    ModalBaseComponent,
    CardWApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

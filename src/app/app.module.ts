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
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ModalBaseComponent } from './components/modals/modal-base/modal-base.component';
import { CardWApiComponent } from './components/cards/card-w-api/card-w-api.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { CreateModModalComponent } from './components/modals/create-mod-modal/create-mod-modal.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardNgBootstrapComponent } from './components/cards/card-ng-bootstrap/card-ng-bootstrap.component';
import { GridSystem2Component } from './components/grid-system2/grid-system2.component';
import { NgBootstrapModalComponent } from './components/modals/ng-modals/ng-bootstrap-modal/ng-bootstrap-modal.component';
import { DelModalComponent } from './components/modals/ng-modals/del-modal/del-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarWDropdownComponent,
    NavbarBottomComponent,
    LoginFormComponent,
    LoginPageComponent,
    SimpleCardComponent,
    GridSystemComponent,
    CarrouselComponent,
    ModalBaseComponent,
    CardWApiComponent,
    DeleteModalComponent,
    CreateModModalComponent,
    AddButtonComponent,
    NotesPageComponent,
    CardNgBootstrapComponent,
    GridSystem2Component,
    NgBootstrapModalComponent,
    DelModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

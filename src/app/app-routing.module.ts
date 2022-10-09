import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: LoginPageComponent},
  {path:'home',component:NotesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

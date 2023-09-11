import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResistrationFormComponent } from './resistration-form/resistration-form.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'form', component:ResistrationFormComponent},
  {path:'signin', component:SigninComponent},
  {path:'dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

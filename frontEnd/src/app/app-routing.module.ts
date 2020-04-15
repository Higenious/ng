import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './Components/contact/contact.component';
import {UsersComponent} from './Components/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {path :'contactus', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

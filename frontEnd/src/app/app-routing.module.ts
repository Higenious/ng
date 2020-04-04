import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './Components/aboutus/aboutus.component';
import {ContactComponent} from './Components/contact/contact.component';
import {UsersComponent} from './Components/users/users.component';
import {AdduserComponent} from './Components/users/adduser/adduser.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'users', component: UsersComponent },
  {path :'contactus', component: ContactComponent},
  {path: 'adduser', component:AdduserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

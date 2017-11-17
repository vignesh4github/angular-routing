import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './auth/signup/signup.component';



const appRoutes: Routes = [
  {path : '', redirectTo : '/homepage',pathMatch: 'full'},
  {path : 'homepage', component: HomepageComponent },
  {path : 'contactus', component: ContactusComponent},
  {path : 'signup', component : SignupComponent},

];

@NgModule({

  imports: [
        RouterModule.forRoot(appRoutes)
  ],
  exports : 
  [
      RouterModule
  ]

})
export class AppRoutingModule { }

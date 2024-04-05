import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClientsComponent } from './clients/clients.component';
import { ComptebancaireComponent } from './comptebancaire/comptebancaire.component';
import{HttpClientModule} from   '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { NewCompteComponent } from './new-compte/new-compte.component';
import { UpdateComponent } from './update/update.component';
import { ClientaccountComponent } from './clientaccount/clientaccount.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClientsComponent,
    ComptebancaireComponent,
    LoginComponent,
    NewClientsComponent,
    NewCompteComponent,
    UpdateComponent,
    ClientaccountComponent,
    RegistrationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

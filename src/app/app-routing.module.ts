import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { adminstratorGuardimplements } from './adminstrator.guard';

import { authguardGuard } from './authguard.guard';
import { ClientaccountComponent } from './clientaccount/clientaccount.component';
import { ClientsComponent } from './clients/clients.component';
import { ComptebancaireComponent } from './comptebancaire/comptebancaire.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { NewCompteComponent } from './new-compte/new-compte.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  
  {path:"" , component:LoginComponent},
  {path:"login", component:LoginComponent},
  { path: "register", component: RegistrationComponent},
  {path:"admin" , component:NavBarComponent ,
   canActivate:[authguardGuard],
   children:[
    {path:"clients" , component:ClientsComponent},
    {path:"comptebancaire" , component: ComptebancaireComponent},
    {path:"newclient" , component:NewClientsComponent , canActivate:[adminstratorGuardimplements],data:{role:"ADMIN"}},
    {path:"newcompte" , component:NewCompteComponent },
    { path: "clients/update/:id", component: UpdateComponent },
    { path: "Administrator", component: AdminComponent ,data:{role:"ADMIN"}},
    { path: "Dashboard", component: ClientaccountComponent }
    
    

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

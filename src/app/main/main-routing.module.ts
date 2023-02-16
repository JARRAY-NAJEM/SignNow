import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard,   } from '../auth/auth.guard';
import { AcheterComponent } from './acheter/acheter.component';
import { ChangerComponent } from './changer/changer.component';
import { ConditionComponent } from './condition/condition.component';
import { GenererComponent } from './generer/generer.component';
import { MainComponent } from './main.component';
import { ProfilComponent } from './profil/profil.component';
import { SignatureComponent } from './signature/signature.component';
import { SignerComponent } from './signer/signer.component';
import { SupportComponent } from './support/support.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {path:'',component:MainComponent,canActivate:[AuthGuard],
  children:[
    {path:'',                       component:SignerComponent,       canActivate:[AuthGuard]},
    {path:'Transactions',           component:TransactionsComponent, canActivate:[AuthGuard]},
    {path:'informations',           component:ProfilComponent,       canActivate:[AuthGuard]},
    {path:'Transactions',           component:TransactionsComponent, canActivate:[AuthGuard]},
    {path:'Changer Mot de passe',   component:ChangerComponent,      canActivate:[AuthGuard]},
    {path:'Signature',              component:SignatureComponent,    canActivate:[AuthGuard]},
    {path:'Signer',                 component:SignerComponent,       canActivate:[AuthGuard]},
    {path:'Contacter',              component:SupportComponent,      canActivate:[AuthGuard]},
    {path:'Acheter',                component:AcheterComponent,      canActivate:[AuthGuard]},
    {path:'Générer-Token',          component:GenererComponent,      canActivate:[AuthGuard]},
    {path:'CGU',                    component:ConditionComponent,      canActivate:[AuthGuard]},
    //*auth to main
    {path:'authentifier',           component:MainComponent,         canActivate:[AuthGuard]},
    //*home to main
    {path:'/main/Contacter' ,       component:SupportComponent ,     canActivate:[AuthGuard]},
    {path:'/main/Acheter' ,         component:AcheterComponent,      canActivate:[AuthGuard]},
    //*btn commencer
    {path:'/main/',                 component:MainComponent,         canActivate:[AuthGuard]}





  ]

},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

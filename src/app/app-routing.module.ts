import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { ApplicationComponent } from './home/application/application.component';

import { HomePComponent } from './home/home-p/home-p.component';
import { HomePcontentComponent } from './home/home-pcontent/home-pcontent.component';
import { ServeurComponent } from './home/serveur/serveur.component';
import { TarifsComponent } from './home/tarifs/tarifs.component';

const routes: Routes = [
  //*admin
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  //*authentification
  {
    path: 'authentification',loadChildren: () => import('./authentification/authentification.module').then( (m) => m.AuthentificationModule), canActivate: [AuthGuard],
  },
  //*main
  {
    path: 'main', loadChildren: () => import('./main/main.module').then((m) => m.MainModule), canActivate: [AuthGuard],
  },
  //*home
  {
    path: '',component: HomePComponent,canActivate: [AuthGuard],children: [
      { path: '', component: HomePcontentComponent },
      { path: 'tarifs', component: TarifsComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'serveur', component: ServeurComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

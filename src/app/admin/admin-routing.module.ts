import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginListComponent } from './login-list/login-list.component';
import { RoleComponent } from './role/role.component';
import { UserlistComponent } from './userlist/userlist.component';



const routes: Routes = [
  {
    path: '',component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'User', component: UserlistComponent },
      { path: 'Login', component: LoginListComponent },
      { path: 'Role', component: RoleComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

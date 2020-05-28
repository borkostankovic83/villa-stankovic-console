import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsAllComponent } from './requests-all/requests-all.component';
import { RequestsHighlightedComponent } from './requests-highlighted/requests-highlighted.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'requests', component: RequestsAllComponent },
  { path: 'highlighted', component: RequestsHighlightedComponent },
  { path: 'users', component: ManagerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

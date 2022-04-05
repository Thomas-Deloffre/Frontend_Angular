import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component'
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search/:app-search', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search/:app-search', component: AppSearchComponent },
  { path: 'dashboard', children: [
    { path: 'user', component: UserDashboardComponent }
  ]},
  { path: 'navbar', component: NavbarComponent },
 
  /* { path: '**', redirectTo: '/home', pathMatch: 'full',} */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

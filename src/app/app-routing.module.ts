import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { WalletsKeywordsComponent } from './components/wallets-keywords/wallets-keywords.component';
import { KeywordListComponent } from './components/keyword-list/keyword-list.component';
import { UserDetailsComponent } from './components/api-java-user/user-details/user-details.component';
import { UserCreateComponent } from './components/api-java-user/user-create/user-create.component';
import { AppPickComponent } from './components/app-pick/app-pick.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { UserAdminCreateComponent } from './components/api-java-user/user-admin-create/user-admin-create.component';
import { UserListComponent } from './components/api-java-user/user-list/user-list.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search/:app-search', redirectTo: '/home', pathMatch: 'full'},
  { path: 'search/:app-search', component: AppSearchComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'dashboard', children: [
    { path: 'user', component: UserDashboardComponent },
    { path: 'admin', component: AdminDashboardComponent},
    { path: 'body', component: BodyComponent}
  ]},
  { path: 'wallets', children: [
    { path: 'myView', component: WalletsComponent},
    { path: 'keywords', component: WalletsKeywordsComponent}
  ]},
  { path: 'appPick', component: AppPickComponent},
  { path: 'keywordsList', component: KeywordListComponent},
  { path: 'notificationsSettings', component: NotificationSettingsComponent},
  { path: 'userProfile', component: UserDetailsComponent},
  { path: 'userCreate', component: UserCreateComponent},
  { path: 'adminCreate', component: UserAdminCreateComponent},
  { path: 'userList', component: UserListComponent}

  
 
  /* { path: '**', redirectTo: '/home', pathMatch: 'full',} */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

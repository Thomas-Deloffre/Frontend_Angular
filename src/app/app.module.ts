import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { MatMenuModule } from '@angular/material/menu';
import { GaugeModule } from 'angular-gauge';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule} from '@angular/material/icon'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatSelectModule} from '@angular/material/select';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { AppPickComponent } from './components/app-pick/app-pick.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component'
import { HttpErrorsInterceptor } from "./common/interceptors/http-errors.interceptor";
import { HttpHeaderInterceptor } from "./common/interceptors/http-headers.interceptor";
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { UserDetailsComponent } from './components/api-java-user/user-details/user-details.component';
import { UserCreateComponent } from './components/api-java-user/user-create/user-create.component';
import { UserListComponent } from './components/api-java-user/user-list/user-list.component';
import { UserAdminCreateComponent } from './components/api-java-user/user-admin-create/user-admin-create.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/dashboard/body/body.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { KeywordListComponent } from './components/keyword-list/keyword-list.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { WalletsKeywordsComponent } from './components/wallets-keywords/wallets-keywords.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { ErrorsComponent } from './components/errors/errors.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDashboardComponent,
    AppSearchComponent,
    AppPickComponent,
    AdminDashboardComponent,
    AboutmeComponent,
    UserDetailsComponent,
    UserCreateComponent,
    UserListComponent,
    UserAdminCreateComponent,
    NavbarComponent,
    BodyComponent,
    WalletsComponent,
    KeywordListComponent,
    LoginComponent,
    SigninComponent,
    WalletsKeywordsComponent,
    NotificationSettingsComponent,
    ErrorsComponent,

    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatMenuModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule.forRoot(routes ,{ useHash: true}),
    
  
  ],
  providers: [
    {
        provide : HTTP_INTERCEPTORS,
        useClass : HttpHeaderInterceptor,
        multi: true,
    },
    {
        provide : HTTP_INTERCEPTORS,
        useClass: HttpErrorsInterceptor,
        multi: true,
    }
],
  bootstrap: [AppComponent],
})
export class AppModule { }

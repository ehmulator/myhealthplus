import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
//import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchUserComponent } from './user/fetch-user/fetch-user.component';
import { CreateUserComponent } from './user/add-user/add-user.component';
import { LoginComponent } from './user/login-user/login-user.component';
import { UserService } from './services/userservice.service';
import { LoginService } from './services/loginservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchUserComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full', }, 
      { path: 'login', component: LoginComponent, data: { title: 'Login Page' } }, 
      { path: 'fetch-user', component: FetchUserComponent },
      { path: 'register-user', component: CreateUserComponent },
      { path: 'user/edit/:id', component: CreateUserComponent },
    ])
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

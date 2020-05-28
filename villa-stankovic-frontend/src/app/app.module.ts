import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { HeaderComponent } from './header/header.component';
import { FootherComponent } from './foother/foother.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsAllComponent } from './requests-all/requests-all.component';
import { RequestsHighlightedComponent } from './requests-highlighted/requests-highlighted.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    HeaderComponent,
    FootherComponent,
    NavbarComponent,
    ProfileComponent,
    RequestsAllComponent,
    RequestsHighlightedComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

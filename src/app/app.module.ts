import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuard } from './auth.guard';

const starshipsModule = () => import("./starships/starships.module").then(x => x.StarshipsModule);
const starshipsInfoModule = () => import("./starship-info/starships-info.module").then(x => x.StarshipsInfoModule);


const appRoutes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "starships", loadChildren: starshipsModule, canActivate: [AuthGuard]},
  {path: "starship-info/:name", loadChildren: starshipsInfoModule, canActivate: [AuthGuard]},
  {path: "login-signup", component: LoginSignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

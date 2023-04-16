import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StarshipInfoComponent } from './starship-info/starship-info.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const appRoutes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "starships", component: StarshipsComponent},
  {path: "starship-info/:name", component: StarshipInfoComponent},
  {path: "login-signup", component: LoginSignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    StarshipInfoComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

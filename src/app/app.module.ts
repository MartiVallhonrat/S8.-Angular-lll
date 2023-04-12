import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StarshipInfoComponent } from './starship-info/starship-info.component';

const appRoutes: Routes = [
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "starships", component: StarshipsComponent},
  {path:"starship-info/:name", component: StarshipInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    StarshipInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { StarshipInfoComponent } from './starship-info.component';

const route: Routes = [
  {
    path: "", component: StarshipInfoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})



export class StarshipsInfoRoutingModule { }

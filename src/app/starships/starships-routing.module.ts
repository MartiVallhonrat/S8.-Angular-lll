import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { StarshipsComponent } from './starships.component';

const route: Routes = [
  {
    path: "", component: StarshipsComponent
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



export class StarshipsRoutingModule { }

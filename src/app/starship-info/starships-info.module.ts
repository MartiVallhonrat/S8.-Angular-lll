import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsInfoRoutingModule } from './starships-info-routing.module';
import { StarshipInfoComponent } from './starship-info.component';
import { ImgFallbackDirective } from './img-fallback.directive';

@NgModule({
  declarations: [
    StarshipInfoComponent,
    ImgFallbackDirective
  ],
  imports: [
    CommonModule,
    StarshipsInfoRoutingModule
  ]
})
export class StarshipsInfoModule { }

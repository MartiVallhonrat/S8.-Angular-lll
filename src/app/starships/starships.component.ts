import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  public starshipList:any;

  constructor(private _starshipservice: StarshipsServiceService){}

  ngOnInit() {
    this._starshipservice.getStarships()
      .subscribe(data => this.starshipList = data.results);
  }
}

import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  public starshipList:any;
  public counter: number = 2;

  constructor(private _starshipservice: StarshipsServiceService){}

  ngOnInit() {
    this._starshipservice.getStarships()
      .subscribe(data => this.starshipList = data.results);
  }

  renderStarships() {
    this._starshipservice.getNewStarships(this.counter)
      .subscribe(data => this.starshipList = this.starshipList.concat(data.results));

    this.counter = this.counter + 1;
  }
}

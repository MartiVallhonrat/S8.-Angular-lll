import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.css']
})
export class StarshipInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _starshipservice: StarshipsServiceService
  ){}

  public starshipName: string = "";
  public starshipResults: any;
  public foundStarship: any; 


  ngOnInit() {
    debugger
    this.starshipName = this.route.snapshot.params["name"];
    console.log(this.starshipName)

    for(let i = 1; i <= 4; i++) {
      this._starshipservice.getNewStarships(i)
        .subscribe(data => this.starshipResults = data.results);
      
      console.log(this.starshipResults);
      const isStarship = (starship: any) => starship.name == this.starshipName
      let foundIndex = this.starshipResults.findIndex(isStarship);

      if(foundIndex !== -1) {
        this.foundStarship = this.starshipResults[foundIndex];
      }
    }

    console.log(this.foundStarship)
  }
}

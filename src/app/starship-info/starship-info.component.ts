import { Component, OnInit } from '@angular/core';
import { StarshipsServiceService } from '../starships-service.service';
import { ActivatedRoute } from '@angular/router';

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
  public starshipIndex: any;
  public foundStarship: any; 


  ngOnInit() {
    this.starshipName = this.route.snapshot.params["name"];

    for(let i = 1; i <= 4; i++) {
      const isStarship = (starship: any) => starship.name == this.starshipName

      this._starshipservice.getNewStarships(i)
        .subscribe((data) => {  
          this.starshipIndex = data.results.findIndex(isStarship);
          if(this.starshipIndex !== -1) {
            this.foundStarship = data.results[this.starshipIndex];
          }
        });
    }
  }
}

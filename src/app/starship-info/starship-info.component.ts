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

  public starshipName = this.route.snapshot.params["name"];
  public starshipIndex: any;
  public foundStarship: any;
  public starshipImage: any;
  public altImage: string = "../../assets/images/big-placeholder.jpg";


  ngOnInit() {

    for(let i = 1; i <= 4; i++) {

      this._starshipservice.getNewStarships(i)
        .subscribe((data) => {  
          this.starshipIndex = data.results.findIndex((starship: any) => starship.name == this.starshipName);
          if(this.starshipIndex !== -1) {
            this.foundStarship = data.results[this.starshipIndex];
            this.starshipImage = this._starshipservice.getImageFromStarship(data.results[this.starshipIndex].url);
          };
        });
    }
  }
}

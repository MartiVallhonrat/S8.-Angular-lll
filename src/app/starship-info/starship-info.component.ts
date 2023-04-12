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
    private _starshipService: StarshipsServiceService
  ) {}

  public starshipName: string = "";
  public starshipList: any;

  ngOnInit() {
    this.starshipName = this.route.snapshot.params["name"];
    console.log(this.starshipName)

    this._starshipService.getStarships()
        .subscribe(data => this.starshipList = data.results);

    
      this._starshipService.getNewStarships(3)
        .subscribe(data => this.starshipList = this.starshipList.push(data.results));
    

    console.log(this.starshipList)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarshipList } from './interfaces/starships';
import { Observable, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {

  private _url:string = "https://swapi.dev/api/starships";
  private _urlImage: string = "https://starwars-visualguide.com/assets/img/starships";

  constructor(private http: HttpClient) { }

  getStarships(): Observable<StarshipList> {
    return this.http.get<StarshipList>(this._url);
  }
  getNewStarships(counter: number): Observable<StarshipList> {
    return this.http.get<StarshipList>(`https://swapi.dev/api/starships?page=${counter}`);
  }
  getImageFromStarship(starshipUrl: string): String {

    function getStarshipId(url: string): string {

      const match = url.match(/\d+/);
      if (match) { 
        const id = match[0];

        return id;

      } else {
        
        throw new Error('Invalid Starship URL'); 
      }
    }

    const starshipId:string = getStarshipId(starshipUrl);

    return `${this._urlImage}/${starshipId}.jpg`;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarshipList } from './interfaces/starships';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {

  private _url:string = "https://swapi.dev/api/starships";

  constructor(private http: HttpClient) { }

  getStarships(): Observable<StarshipList> {
    return this.http.get<StarshipList>(this._url);
  }
  getNewStarships(counter: number): Observable<StarshipList> {
    return this.http.get<StarshipList>(`https://swapi.dev/api/starships?page=${counter}`);
  }
}

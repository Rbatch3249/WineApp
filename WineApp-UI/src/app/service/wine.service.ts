import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wines } from '../models/wine';


@Injectable()
export class WineService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllWines(): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/wines`);
  }

  getWinesById(id: number): Observable<any>{
    return this.http.get<any>(this.url+`/wines/${id}`);
  }

  addToWines(wine: Wines): Observable<any>{
    return this.http.post<any>(this.url+ `/wines`,wine );
  }
    filterWines(wineType: string): Observable<any>{
      return this.http.get<any>(this.url+`/wines/search/${wineType}`);
    }
}

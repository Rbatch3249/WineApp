import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class EdamamService {

  url: string;
  app_key: string = "6156475e2ca23b9f247e6ae5a4542e0a";
  app_id: string = "62c3c02b";

  results: any[] = [];



  constructor(private http: HttpClient, public router: Router) { }

  getRecipeData(userSearch: string, dietSearch: string): Observable<any> {    
    this.url = "https://api.edamam.com/search?q=" + userSearch + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&to=100";
    if (dietSearch.length == 0) {
      this.url;
    } else {
      this.url = this.url + "&healt=" + dietSearch;
    }
    return this.http.get<any>(this.url)
      
      
  }

}
